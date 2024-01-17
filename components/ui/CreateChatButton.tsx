import React from 'react'
import { Button } from './button'
import { MessageSquarePlusIcon } from 'lucide-react'
function CreateChatButton() {
  return (
    <Button variant={"outline"}>
        <MessageSquarePlusIcon />
    </Button>
  )
}

export default CreateChatButton