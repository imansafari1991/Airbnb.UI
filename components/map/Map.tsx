import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { RoomCard } from '../room-card';
import React from 'react';
import { ROOM_CARD_DATA } from '@/constants';

const customIcon = (cost: string | number): L.DivIcon => {
  return new L.DivIcon({
    className: ' rounded-full text-black text-sm text-bold bg-white',
    html: `<div class="flex items-center justify-center h-full">${cost}</div>`,
    iconSize: [45, 35],
  });
};

function MapComponent() {
  return (
    <div>
      <MapContainer
        center={[51.99274772863586, 8.560429425686753]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: '75vh', width: '100vw', position: 'absolute' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <>
          {ROOM_CARD_DATA?.map((data) => (
            <Marker
              key={data?.id}
              position={data?.loc?.position}
              icon={customIcon(data?.price)}
            >
              <Popup>
                <div className='w-full max-h-72 gap-y-0'>
                  <RoomCard
                    data={data}
                    isFavorite={data?.isFavorite}
                    slug={data?.slug}
                    onFavoriteClickHandler={() => {
                      console.log('action received for favourite');
                    }}
                  />
                </div>
              </Popup>
            </Marker>
          ))}
        </>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
