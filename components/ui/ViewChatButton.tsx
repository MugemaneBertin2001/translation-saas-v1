"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from './button'
import {MessagesSquareIcon} from 'lucide-react'
import { useRouter } from 'next/navigation'

function ViewChatButton() {
  const Router = useRouter();
  const createChat = async ()=>{
    Router.push(`/chat/chatId`)

  }
  return (
    <Button variant={"outline"} onClick={createChat}>
      <MessagesSquareIcon />
    </Button>
  )
}

export default ViewChatButton