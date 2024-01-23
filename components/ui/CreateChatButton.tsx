"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useToast } from "./use-toast";

function CreateChatButton({ isLarge }: { isLarge?: boolean }) {
  // const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState();
  const { toast } = useToast();
  const subscription = useSubscriptionStore((state) => state.subscription);

  const createNewChat = async () => {
    // all the logic here
    router.push("/chat/abc");
  };

  if (isLarge) {
    return (
      <div>
        <Button onClick={createNewChat} variant={"default"}>
          {loading ? <LoadingSpinner /> : "Create a new chat"}
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={createNewChat} variant={"outline"}>
      <MessageSquarePlusIcon />
    </Button>
  );
}

export default CreateChatButton;
