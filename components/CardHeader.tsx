import React from 'react';
import {FaUser} from 'react-icons/fa'

interface CardHeaderProps {
  senderName: string;
  senderImage?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ senderName, senderImage }) => (
  <div className="flex items-center mb-2 gap-2">
    <FaUser color='purple' size={20} />
    {/* <div className="font-semibold text-sm">{senderName}</div> */}
  </div>
);

export default CardHeader;
