
import React from 'react';
import { FiDownload } from 'react-icons/fi';
interface DownloadButtonProps {
  fileName: string;
  downloadUrl: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileName, downloadUrl }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600 flex flex-1"
      onClick={handleDownload}
    >
      <span className="mr-2" >
      Download
      </span>
      <FiDownload /> 
    </button>
  );
};

export default DownloadButton;
