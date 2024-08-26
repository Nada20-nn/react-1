import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import cakeImg from "../../Imgs/cake.png";
import houseImg from "../../Imgs/house.png";
import tentImg from "../../Imgs/tent.png";
import Modal from '../Modal/Modal';

export default function Portfolio() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    { src: houseImg, alt: "House Image" },
    { src: cakeImg, alt: "Cake Image" },
    { src: tentImg, alt: "Tent Image" },
    { src: houseImg, alt: "House Image" },
    { src: cakeImg, alt: "Cake Image" },
    { src: tentImg, alt: "Tent Image" }
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalVisible(true);
  };

  return (
    <div>
      <div className="flex min-h-96 pb-10 pt-32 flex-col justify-center align-middle">
        <h2 className='mx-auto text-4xl font-bold text-dark uppercase'>portfolio component</h2>
        <div className='about-lines-p mt-5'>
          <FaStar className='mx-auto text-dark text-lg' />
        </div>
        <div className="grid md:grid-cols-2 mx-auto container-portfolio lg:grid-cols-3 sm:grid-cols-1 gap-9 p-4">
          {images.map((image, index) => (
            <div key={index} className="relative" onClick={() => handleImageClick(image.src)}>
              <img src={image.src} alt={image.alt} className='rounded-md' />
              <div className="absolute inset-0 main-color-p bg-opacity-40 opacity-0 flex items-center justify-center rounded-md hover:opacity-100 transition cursor-pointer duration-500">
                <FaPlus className='text-8xl' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isVisible={isModalVisible} imageSrc={selectedImage} onClose={() => setIsModalVisible(false)} />
    </div>
  );
}
