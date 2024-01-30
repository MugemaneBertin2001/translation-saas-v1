import Header from "./Header";
import MessageList from "./MessageList";
import ParticipantsList from "./ParticipantsList";
import ChatHeader from './ChatHeader'

const ChatRoom = () => {
    return (
      <div className="w-full h-full ">
        <Header />
        <ChatHeader />
        {/* <ParticipantsList /> */}
        <MessageList />
      </div>
    );
  };

  export default ChatRoom