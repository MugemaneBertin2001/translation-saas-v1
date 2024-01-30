import React from 'react';
import Participant from './Participant'
import mockMessages from './mockMessages'

const participants =[
  {
    id:1 ,
    fullName:'John',
    imageName:'',
    role:'admin',
  },
  {
    id:2 ,
    fullName:'Alice',
    imageName:'',
    role:'user',
  },
  {
    id:3 ,
    fullName:'Bob',
    imageName:'',
    role:'user',
  },
];

const ParticipantsList: React.FC = () => {

  return (
    <div className="mb-4 flex flex-row  border mx-auto space-x-10 text-sm w-full">
       {participants.map((participant, index) => (
        <Participant key={index} {...participant} />
      ))}
      
  </div>
  );
};

export default ParticipantsList;