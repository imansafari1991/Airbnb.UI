'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ISliderProps } from './Slider.types';
import { ChevronLeftIcon } from '@/app/icons';
import Link from 'next/link';

export const Slider: React.FC<ISliderProps> = ({ images, altText, slug }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isLastItem = currentIndex < images.length - 1;
  const handleNext = () => {
    if (isLastItem) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (images?.length === 1) {
    return (
      <Link
        href={slug}
        className='relative w-full h-auto min-h-[150px] inline-block'
      >
        <Image
          src={images[0]}
          fill
          alt={`${altText} - image 1`}
          className='aspect-square object-center object-cover rounded-xl'
        />
      </Link>
    );
  }

  return (
    <div className='relative w-full h-full min-h-[120px] overflow-hidden'>
      {/* Image Slider */}
      <Link
        href={slug}
        className='relative transition-all duration-500 ease-in-out w-full inline-block h-full'
      >
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            fill
            alt={`${altText} - image ${index + 1}`}
            className={`aspect-square object-center object-cover rounded-xl transition-opacity duration-300 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </Link>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-linear'>
          {currentIndex !== 0 && (
            <button
              onClick={handlePrev}
              className='absolute top-1/2 left-3 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md z-10 '
            >
              <ChevronLeftIcon className='w-6 h-6 rotate-180 text-black' />
            </button>
          )}

          {isLastItem && (
            <button
              onClick={handleNext}
              className='absolute top-1/2 right-3 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md z-10'
            >
              <ChevronLeftIcon className='w-6 h-6 text-black' />
            </button>
          )}
        </div>
      )}

      {/* Dots Indicator */}
      <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ease-in-out ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
