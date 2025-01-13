import Header from '../components/header/_components/Header';
import NavigationTag from '../components/navigation/NavigationTag';
import ListCard from '../components/list/ListCard';
import ShowMap from '../components/map/ShowMap';
import Main from '@/components/main/Main';

export default function Home() {
  return (
    <>
      <div className='grid items-center  justify-items-center pb-20 font-[family-name:var(--font-geist-sans)]'>
        <header className='w-full'>
          <Header />
        </header>
      </div>
      <Main />
    </>
  );
}
{
  /*you need a state if the room card is open set the map to false  */
}
