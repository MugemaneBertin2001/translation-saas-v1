import { AiOutlineDelete, AiOutlineUserAdd, AiOutlineCopy } from 'react-icons/ai';
const ChatHeader = () => {
    return (
      <div className="flex justify-end space-x-4 mb-4 text-sm py-5">
      <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
        <AiOutlineDelete className="mr-2" />
        Delete Chat
      </button>
      <button className="bg-black text-white px-4 py-2 rounded flex items-center">
        <AiOutlineUserAdd className="mr-2" />
        Add Friend
      </button>
      <button className="bg-white text-black px-4 py-2 rounded flex items-center">
        <AiOutlineCopy className="mr-2" />
        Copy Link
      </button>
    </div>
    );
  };

  export default ChatHeader