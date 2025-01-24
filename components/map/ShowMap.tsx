'use client';

import React from 'react';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('./Map'), { ssr: false });

export default function ShowMap() {
  return (
    <div className='relative'>
      <Map />
    </div>
  );
}
