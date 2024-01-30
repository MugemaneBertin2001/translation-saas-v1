"use client"
import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
  }
  
  const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage}) => {
    const [message, setMessage] = useState('');
  
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setMessage(e.target.value);
    };
  
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        // Call the parent component's function to handle sending the message
        setMessage(message);
  
        // Clear the input after sending the message
        setMessage('');
      }
    };

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white text-black dark:bg-gray-800 dark:text-white p-4 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 flex-grow rounded-l-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 ml-2 focus:outline-none dark:bg-blue-800 dark:hover:bg-blue-700"
        >
          <IoIosSend size={20} />
        </button>
      </div>

    );
};

export default ChatInput;
