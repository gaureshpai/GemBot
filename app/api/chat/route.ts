import { kv } from '@vercel/kv'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'
import { auth } from '@clerk/nextjs'
import { nanoid } from '@/lib/utils'

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const { messages, previewToken } = json

    const { userId } = auth()

    if (process.env.VERCEL_ENV !== 'preview' && !userId) {
      return new Response('Unauthorized', { status: 401 });
    }

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY || previewToken
    })

    const openai = new OpenAIApi(configuration)

    const res = await openai.createChatCompletion({
      model: process.env.AI_MODEL ?? 'gpt-4',
      messages,
      temperature: 0.7,
      stream: true
    })

    const stream = OpenAIStream(res, {
      async onCompletion(completion) {
        const title = json.messages[0].content.substring(0, 100)

        if (userId) {
          const id = json.id ?? nanoid()
          const createdAt = Date.now()
          const path = `/chat/${id}`

          const payload = {
            id,
            title,
            userId,
            createdAt,
            path,
            messages: [
              ...messages,
              {
                content: completion,
                role: 'assistant'
              }
            ]
          }

          await kv.hmset(`chat:${id}`, payload)

          await kv.zadd(`user:chat:${userId}`, {
            score: createdAt,
            member: `chat:${id}`
          })
        }
      }
    })
    console.log('OpenAI API response:', res);

    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error('Error in POST request:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
