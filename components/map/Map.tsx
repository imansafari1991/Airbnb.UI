import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { RoomCard } from '../room-card';
import { ROOM_CARD_DATA } from '@/constants';
import { IRoomCardProps } from '../room-card/RoomCard.types';

{
  /*create a reusable component for custom icon */
}
const customIcon = (cost: string | number): L.DivIcon => {
  return new L.DivIcon({
    className: ' rounded-full text-black text-sm text-bold bg-white',
    html: `<div class="flex items-center justify-center h-full">${cost}</div>`,
    iconSize: [45, 35],
  });
};

const locations = ROOM_CARD_DATA.map((room) => ({
  position: room.loc.position,
  popupText: room.price as number,
}));
const Map = () => {
  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '63vh', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {ROOM_CARD_DATA.map((data (
          <Marker
            key={index}
            position={location.position}
            icon={customIcon(location.popupText)}
          >
            <Popup>
              <RoomCard
                data={ROOM_CARD_DATA[index]}
                isFavorite={ROOM_CARD_DATA[index]?.isFavorite}
                slug={ROOM_CARD_DATA[index]?.slug}
                onFavoriteClickHandler={() => {
                  console.log('action received for favourite');
                }}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
