import React from "react";
import ChatListRows from "./ChatListRows";

async function ChatList() {
  //   const session = await getServerSession(authOptions);

  // const chatsSnapShot = await getDocs(
  //   chatMembersCollectionGroupeRef(session?.user.id!)
  // );

  // const initialChats = chatsSnapShot.doc.map((doc) => ({
  //   ...doc.data(),
  //   //timestamp: null,
  // }));
  return <ChatListRows /* initialChats={initialChats} */ />;
}

export default ChatList;
