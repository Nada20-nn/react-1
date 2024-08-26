import React from 'react';

export default function Modal({ isVisible, imageSrc, onClose }) {
  if (!isVisible) return null; // Don't render the modal if it's not visible

  return (
    <div className="fixed inset-0 w-full h-full main-color-modal flex justify-center items-center" onClick={onClose}>
      <div className="relative p-4">
        <img 
          alt="Selected" 
          src={imageSrc} 
          className="rounded-md max-w-full max-h-3/4-screen" 
          style={{ maxWidth: '500px', maxHeight: '75vh' }} // Set max width and height
        />
      </div>
    </div>
  );
}
