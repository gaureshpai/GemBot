# **Next.js AI Chatbot Template**

An open-source AI chatbot template built with Next.js, Vercel AI SDK, OpenAI, and Vercel KV.

<p align="center">
  <a href="https://chat.vercel.ai/">
    <img alt="Next.js 13 and app template Router-ready AI chatbot." src="https://chat.vercel.ai/opengraph-image.png" />
    <h1 align="center">Next.js AI Chatbot</h1>
  </a>
</p>

## **Overview**
This repository provides a starting point for building AI-powered chatbots using Next.js with modern web technologies and powerful AI services. With built-in support for OpenAI, Anthropic, HuggingFace, or custom AI chat models, this template offers a flexible solution for creating intelligent and interactive chat applications.

### **Key Features**
- **Next.js App Router**: Harness the power of React Server Components (RSCs) and Server Actions.
- **Vercel AI SDK**: Streamlined integration with AI models for real-time chat interactions.
- **AI Model Support**: Easily integrate OpenAI (default), Anthropic, HuggingFace, or your custom models.
- **Tailwind CSS & Radix UI**: Beautiful, responsive design with [shadcn/ui](https://ui.shadcn.com).
- **Authentication & Access Control**: [Clerk](https://clerk.com) integration for seamless user management.
- **Edge Runtime Ready**: Optimized for performance at the edge with Vercel.
- **Chat History & Session Storage**: Powered by [Vercel KV](https://vercel.com/storage/kv) for persistent conversations.

---

## **Getting Started**

### **Running Locally**

To run the Next.js AI Chatbot on your local machine, follow these steps:

1. **Install the Vercel CLI**:
   ```bash
   npm i -g vercel
   ```
   
2. **Link your local instance with Vercel and GitHub**:
   ```bash
   vercel link
   ```
   - This will create a `.vercel` directory that connects your local environment to Vercel.

3. **Pull the environment variables**:
   ```bash
   vercel env pull
   ```
   - This will download all necessary environment variables into your local environment.

4. **Install project dependencies**:
   ```bash
   pnpm install
   ```

5. **Start the development server**:
   ```bash
   pnpm dev
   ```

Your app will be running locally on [http://localhost:3000](http://localhost:3000/).

---

## **Environment Variables**
To ensure the application works, you’ll need to set up environment variables. You can find the required variables in the [`.env.example`](./.env.example) file. It's recommended to use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for deployment.

---

## **Technology Stack**
- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://radix-ui.com)
- **AI SDK**: [Vercel AI SDK](https://sdk.vercel.ai/docs)
- **Authentication**: [Clerk](https://clerk.com)
- **State & Storage**: [Vercel KV](https://vercel.com/storage/kv)
- **Icons**: [Phosphor Icons](https://phosphoricons.com)

---

## **Contributing**
This project is open-source and welcomes contributions. If you’d like to improve the chatbot or add new features, feel free to submit a pull request or open an issue.

---

## **Authors**
This template is built by the [Vercel](https://vercel.com) and [Next.js](https://nextjs.org) teams, with contributions from:

- Jared Palmer ([@jaredpalmer](https://twitter.com/jaredpalmer))
- Shu Ding ([@shuding_](https://twitter.com/shuding_))
- shadcn ([@shadcn](https://twitter.com/shadcn))
- Gauresh ([@hseruag](https://twitter.com/hseruag))
- Jnanesh ([@jtuluve](https://github.com/jtuluve))
- Himanshu ([@HimanshuHegde](https://github.com/HimanshuHegde))
- Milan ([@Milan-C-I](https://github.com/Milan-C-I))