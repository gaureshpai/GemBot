# Gembot 🤖

Gembot is an advanced AI-powered chatbot designed to engage users in natural language conversations using state-of-the-art machine learning models. Built on top of the **Gemini** architecture, it supports features such as summarization, streaming responses, and custom dialogue management.

## Features

- 💬 **Natural language understanding:** Responds to user queries with contextual understanding.
- 🔄 **Real-time conversation:** Supports asynchronous and real-time chat interactions.
- 📜 **Summarization:** Can summarize text passages dynamically.
- 🌐 **Web Integration:** Can be deployed and integrated into web applications easily.
- 📈 **Scalable:** Built for both lightweight personal projects and large-scale implementations.

## Demo

Check out a live demo of Gembot [here](https://aigembot.vercel.app).

## Installation

To install Gembot locally, follow the steps below.

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Step 1: Clone the repository

```bash
git clone https://github.com/gaureshpai/Gembot.git
cd Gembot
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Run the application

```bash
npm run dev
```

### Web Interface

Gembot also comes with a web UI:

1. Start the server using `npm run dev`.
2. Open `http://localhost:3000` in your browser.
3. Interact with Gembot using the web-based interface.

## API

If you wish to integrate Gembot into another system, it offers a flexible API:

- **POST** `/api/chat`: Sends a message to Gembot and returns a response.

Example API request:

```json
{
  "message": "What is AI?"
}
```

Response:

```json
{
  "response": "AI stands for Artificial Intelligence..."
}
```

## Contributing

We welcome contributions! Feel free to open issues or submit pull requests.