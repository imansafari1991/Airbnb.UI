import dynamic from 'next/dynamic';

const Map = dynamic((): any => import('@/components/map/Map'), { ssr: false });

export { Map };
