import React, { useState } from 'react';

function NavigateButton({ menuIsOpen, setMenuIsOpen }: any) {
  return (
    <button
      className='bg-black p-4 rounded-3xl text-white fixed bottom-10 z-40'
      onClick={() => {
        setMenuIsOpen(!menuIsOpen);
      }}
    >
      {menuIsOpen ? ' Show on the map' : 'Show the rooms'}
    </button>
  );
}

export default NavigateButton;
