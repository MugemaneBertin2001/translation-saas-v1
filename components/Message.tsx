import React from 'react';
import CardHeader from './CardHeader';

interface MessageProps {
  senderName: string;
  senderImage: string;
  body: string;
  time: string;
}
const loggedInUser = {
  fullName: 'John',
}

const Message: React.FC<MessageProps> = ({ senderName, senderImage, body, time }) => {
  const isSenderLoggedInUser = senderName === loggedInUser.fullName;
  return (
    <div className={`mb-4 flex flex-row gap-2 text-md p-2 ${isSenderLoggedInUser ? 'bg-purple-800' : 'bg-white'} w-fit rounded-md shadow-md transition duration-300 transform hover:shadow-lg ${isSenderLoggedInUser ? 'ml-auto' : 'mr-auto'} dark:bg-gray-800`}>
    <CardHeader senderName={senderName} senderImage={senderImage} />
    <div className="space-y-2">
    <div className={` text-base ${isSenderLoggedInUser ? 'text-white' : 'text-gray-800'} dark:text-gray-300 text-sm `}>{body}</div>
    <div className={`text-gray-500 text-sm italic  ${isSenderLoggedInUser ? 'text-white' : ''} dark:text-gray-300`}>Time: {time}</div>
    </div>
    </div>


  );
};

export default Message;