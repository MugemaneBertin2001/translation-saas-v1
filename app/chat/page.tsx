import React from 'react'
import Link from 'next/link';


const chats = [
    {
      id: 1,
      name: 'Family Chat',
      image: '/family-chat.jpg',
      participants: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Alice' },
        { id: 3, name: 'Bob' },
      ],
    },
    {
      id: 2,
      name: 'Work Chat',
      image: '/work-chat.jpg',
      participants: [
        { id: 4, name: 'Eva' },
        { id: 5, name: 'Charlie' },
        { id: 6, name: 'Grace' },
      ],
    },
  ];


function chatsPage() {
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {chats.map((chat) => (
        <div key={chat.id} className="p-4 bg-white shadow-md rounded-md">
          <Link href={`/chat/${chat.id}`}>
            <a>
              <img
                src={`/images/${chat.image}`}
                alt={chat.name}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-lg font-semibold">{chat.name}</h2>
            </a>
          </Link>
        </div>
      ))}
    </div>
    )
}

export default chatsPage
