'use client';

import React, { useState } from 'react';
import NavigationTag from '../navigation/NavigationTag';
import ListCard from '../list/ListCard';
import ShowMap from '../map/ShowMap';

const main = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  return (
    <>
      <main className='flex flex-col items-center justify-center w-full mt-20'>
        <NavigationTag />
        <button
          className='bg-black p-4 rounded-3xl text-white fixed bottom-10 z-40'
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          {menuIsOpen ? ' Show on the map' : 'show the rooms'}
        </button>
      </main>
      {menuIsOpen ? <ListCard /> : <ShowMap />}
    </>
  );
};

export default main;
