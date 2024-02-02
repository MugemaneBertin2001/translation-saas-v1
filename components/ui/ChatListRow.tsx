"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { useUser, UserButton } from "@clerk/nextjs";

// import {Message, limitedSortedMessagesRef} from "@/lib/converters/Message"
// import {useCollectionData} from "react-firebase-hooks/firestore"

function ChatListRow(/*{ chatId }: { chatId: string }*/) {
  // const [message, loading, error] = useCollectionData<Message>(
  //   limitedSortedMessagesRef(chatId)
  // );

  // const {data:session} = useSession();
  const router = useRouter();
  const user = useUser();
  // function prettyUUID(n = 4) {
  //   return chatId.substring(0, n);
  // }

  // const row = (message?: Message) => (
  //   <div
  //     key={chatId}
  //     onClick={() => router.push(`/chat/${chatId}`)}
  //     className="flex p-5 items-center space-x-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-scate-700"
  //   >
  //     <UserAvatar
  //       name={message?.user.name || session?.user.name}
  //       image={message?.user.image || session?.user.image}
  //     />
  //     <div className="flex-1">
  //       <p className="font-bold">
  //         {!message && "New Chat"}
  //         {message &&
  //           [message?.user.name || session?.user.name].toString().split(" ")[0]}
  //       </p>
  //       <p className="text-gray-400 line-clamp-1">
  //         {"Get the conversation started..."}
  //       </p>
  //     </div>

  //     <div className="text-xs text-gray-400  text-right">
  //       <p className="mb-auto">
  //         {message
  //           ? new Date(message.timestamp).toLocaleTimeString()
  //           : "No messages yet"}
  //       </p>
  //       <p className="">chat #{prettyUUID()</p>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      {/* {loading && (
        <div className="flex p-5 items-center space-x-2">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </div>
      )}  */}

      {/* 

      {message?.length === 0 !loading && row()}
      {message?.map((message) => row(message))}
      
      */}

      {/* Testing Skeleton */}
      {/* <div className="flex p-5 items-center space-x-2">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div> */}
      {/* end */}

      {/* Single chatlist component */}
      <div
        onClick={() => router.push(`/chat/2`)}
        className="flex p-5 items-center space-x-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700"
      >
        <div>
          <UserButton />
        </div>
        <div className="flex-1">
          <p className="font-bold">New chat </p>
          <p className="text-gray-400 line-clamp-1">
            Get the conversation started...
          </p>
        </div>

        <div className="text-xs text-gray-400  text-right">
          <p className="mb-auto">No message yet</p>
          <p className="">chat #123</p>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default ChatListRow;
