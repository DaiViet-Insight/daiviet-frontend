import React from "react";
import { useState } from "react";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator, ConversationHeader } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import './ChatBox.css';

const API_KEY = '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';

const ChatBox = () => {
    const [chatBotOpen, setChatBotOpen] = useState(false);
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: 'Xin chào, tôi là DaiVietGPT, tôi có thể giúp gì cho bạn?',
            sentTime: '2024-01-01T12:00:00.000Z',
            sender: 'Chat Bot',
        }
    ])

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sentTime: new Date().toISOString(),
            sender: 'me',
            direction: 'outgoing',
        }

        setMessages([...messages, newMessage]);

        setTyping(true);
        await processMessageToChatGPT([...messages, newMessage]);
    }

    async function processMessageToChatGPT(chatMessages) {
        let apiMessage = chatMessages.map((messageObject) => {
            let role = ""
            if (messageObject.sender === 'Chat Bot') {
                role = 'assistant'
            } else {
                role = 'user'
            }
            return { role: role, content: messageObject.message }
        })

        const systemMessage = {
            role: 'system',
            content: 'Explaining the answer to the user',
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [systemMessage, ...apiMessage],
        }

        await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            setMessages([...chatMessages, {
                message: data.choices[0].message.content,
                sentTime: new Date().toISOString(),
                sender: 'Chat Bot',
                direction: 'incoming',
            }])
            setTyping(false);
        })
    }

    return (
        <div
            className="chatBox"
        >
            <div 
                className={'chatBox-container' + (chatBotOpen ? ' chatBot-open' : '')}
            >
                <MainContainer>
                    <ChatContainer>
                        <ConversationHeader>
                            <ConversationHeader.Content
                                userName="DaiVietGPT"
                                info="Chat Bot"
                            />
                        </ConversationHeader>
                        <MessageList
                            typingIndicator={typing ? <TypingIndicator content='DaiVietGPT đang nhắn...' /> : null}
                        >
                            {messages.map((message, index) => {
                                return (
                                    <Message
                                        key={index}
                                        model={{
                                            message: message.message,
                                            sentTime: message.sentTime,
                                            sender: message.sender,
                                            direction: message.direction,
                                        }}
                                    />
                                )
                            })}
                        </MessageList>
                        <MessageInput placeholder="Nhập tin nhắn tại đây" onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
            <div className="chatBox-button" onClick={() => setChatBotOpen(!chatBotOpen)}>
                <img src="https://img.icons8.com/fluency/48/000000/chat.png" alt="chatbox" />
            </div>
        </div>
    );
}

export default ChatBox;