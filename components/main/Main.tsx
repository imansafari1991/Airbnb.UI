'use client';

import React, { useState } from 'react';
import NavigationTag from '../navigation/NavigationTag';
import ListCard from '../list/ListCard';
import ShowMap from '../map/ShowMap';
import NavigateButton from '../map/NavigateButton';

const main = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  return (
    <>
      <main className='flex flex-col items-center justify-center w-full mt-20'>
        <NavigationTag />
        <NavigateButton menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      </main>
      {menuIsOpen ? <ListCard /> : <ShowMap />}
    </>
  );
};

export default main;
