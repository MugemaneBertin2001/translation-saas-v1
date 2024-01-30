import Image from 'next/image';
import React from 'react';
import { FaUser } from 'react-icons/fa';

interface ParticipantProps {
  fullName: string,
  imageName: string;
  role: any;
}

const Participant: React.FC<ParticipantProps> = ({ imageName, role, fullName }) => {
  return (
    <div className="flex flex-row items-center space-x-4 p-4 bg-white border border-gray-300 rounded-md text-black">
    {imageName ? (
      <Image
        src={`/images/${imageName}`} // Assuming your images are in a folder named "images"
        alt={imageName}
        className="rounded-full w-16 h-16 object-cover"
      />
    ) : (
      <FaUser size={20} className="text-gray-500" />
    )}
    <div className="flex flex-col items-center">
      <p className="mt-2 text-md font-semibold">{fullName}</p>
      {role === 'admin' && (
        <p className="mt-2 text-sm italic text-orange-600">{role}</p>
      )}
    </div>
  </div>
  );
};

export default Participant 