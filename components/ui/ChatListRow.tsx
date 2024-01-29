"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function ChatListRow(/*{ chatId }: { chatId: string }*/) {
  // const [message, loading, error] = useCollectionData<Message>(
  //   limitedSortedMessagesRef(chatId)
  // );

  return (
    <div>
      {/* ChatListRow hello */}
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}

export default ChatListRow;
