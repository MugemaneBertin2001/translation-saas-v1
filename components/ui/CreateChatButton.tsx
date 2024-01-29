"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useToast } from "./use-toast";
import LoadingSpinner from "./LoadingSpinner";

import { v4 as uuidv4 } from "uuid";

function CreateChatButton({ isLarge }: { isLarge?: boolean }) {
  // const { data: sessions } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  // const subscription = useSubscriptionStore((state) => state.subscription);

  const createNewChat = async () => {
    // if (!session?) return;
    setLoading(true);
    toast({
      title: "creating new chat...",
      description: "Hold tight while we create new chat...",
      duration: 3000,
    });

    // check if user is pro and limit them creating a new chat

    const chatId = uuidv4();

    // await setDoc(addChatRef(chatId, sesseion.user.id), {
    //   userID: sessionStorage.user.id,
    //   email: sessionStorage.user.email!,
    //   timestamp: serverTimestamp(),
    //   isAdmin: true,
    //   chatId: chatId,
    //   image: session.user.image || "",
    // })
    // .then(() => {
    //   toast({
    //     title: "success",
    //     description: "Your chat has been created",
    //     className: "bg-green-600 text-white",
    //     duration: 2000,
    //   });
    //   router.push("/chat/abc");
    // })
    // .catch(() => {
    //   toast({
    //     title: "Error",
    //     description: "There was an error creating your chat",
    //     variant: "destructive",
    //   });
    // })
    // .finally(() => {
    //   setLoading(false);
    // });
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
