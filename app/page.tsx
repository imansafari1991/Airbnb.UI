import Header from "../components/header/_components/Header";
import NavigationTag from "../components/navigation/NavigationTag";
import ListCard from "../components/list/ListCard";
import PriceRange from "../components/price-range/PriceRange";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center  pb-20  font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <Header />
      </header>
      <main className="flex flex-col items-center justify-center w-full mt-40">
        <NavigationTag />
        <ListCard />
        <PriceRange />
      </main>
    </div>
  );
}
