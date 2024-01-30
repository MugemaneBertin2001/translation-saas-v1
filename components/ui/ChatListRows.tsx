"use client";
import React from "react";
import ChatListRow from "./ChatListRow";
import { MessageSquare } from "lucide-react";
import CreateChatButton from "./CreateChatButton";

function ChatListRows(/*{ initialChats }: { initialChats: ChatMembers[] }*/) {
  //   const { data: sesseion } = useSession();
  //   const [members, loading, error] = useCollectionData<ChatMembers>(
  //     session && chatMemberCollectionGroupRef(session?.user.id!),
  //     {
  //       iniatialValue: initialChats,
  //     }
  //   );
  //   if (members?.length === 0)
  // return (
  //   <div>
  //     <div className="flex flex-col justify-center items-center pt-40 space-y-2">
  //       <MessageSquare className="h-10 w-10" />
  //       <h1 className="text-5xl font-extralight">Welcome !</h1>
  //       <h2 className="pb-10">
  //         Lets get you started by creating yout first chat!
  //       </h2>
  //       <CreateChatButton isLarge />
  //     </div>
  //   </div>
  // );
  return (
    <div className="">
      {/* {members?.map((member, i) => (
        <ChatListRow key={member.ChatId} chatId={member.chatId} />
      ))} */}
      <ChatListRow />
      <ChatListRow />
      <ChatListRow />
      <ChatListRow />
      <ChatListRow />
      <ChatListRow />
    </div>
  );
}

export default ChatListRows;
