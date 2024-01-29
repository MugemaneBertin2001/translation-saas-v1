import ChatList from "@/components/ui/ChatList";
import React from "react";
type Props = {
  params: {};
  searchParams: {
    error: string;
  };
};

function ChatsPage({ searchParams: { error } }: Props) {
  return (
    <div className="mt-20">
      {/* Chat permission chats */}
      {/* Chat list */}
      <ChatList />
    </div>
  );
}

export default ChatsPage;
