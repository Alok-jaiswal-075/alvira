import {METHODS} from "./constants"
// import { i18n } from 'next-i18next';
import { INITIALS } from './initials';

export async function getChatGptAnswer(messagesWithSender: { message: string; sender: string }[]) {
  // i18n?.init();

  const chatGptApiFormattedMessages = messagesWithSender.map(messageObject => {
    return {
      role: messageObject.sender === 'ChatGPT' ? 'assistant' : 'user',
      content: messageObject.message,
    };
  });

  const systemMessageToSetChatGptBehaviour = {
    role: 'system',
    content: INITIALS.systemMessage,
  };

  const chatGptApiMessages = [
    systemMessageToSetChatGptBehaviour, // The system message DEFINES the logic of our chatGPT
    ...chatGptApiFormattedMessages, // The messages from our chat with ChatGPT
  ];

  try {
    const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${"openapi key"}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        chatGptApiMessages,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const { choices } = data;

    return choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
  }
}
