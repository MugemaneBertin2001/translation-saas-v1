"use client"
import React from 'react';
import Message from './Message';
import mockMessages from './mockMessages'
import ChatInput from './SendChat'

const MessageList: React.FC = () => {
  const handleSendMessage = (message: string) => {
    // Implement logic to send the message
    console.log('Sending message:', message);

  };
  console.log(mockMessages)
 
  return (
    <div className={`flex flex-col h-fit w-full py-auto `}>
    {mockMessages.length > 0 ? (
        mockMessages.map((message) => <Message key={message.id} {...message} />)
    ) : (
        <div className={`flex items-center justify-center h-full text-gray-500  bg-purple-800 bg-purple-500 w-1/2 mx-auto p-10 rounded-md`}>
            <p className={`text-white text-center p-4 dark:text-gray-300 `}>
                No messages in the chatroom. Start a conversation!
            </p>
        </div>
    )}
    <div>
        <ChatInput onSendMessage={function (message: string): void {
            throw new Error('Function not implemented.');
        }} />
    </div>
  </div>

  
  );
};

export default MessageList;