import Header from "./components/header/Header";
import NavigationTag from "./components/navigation/NavigationTag";
import ListCard from "./components/list/ListCard";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center  pb-20  font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <Header />
      </header>
      <main className="flex flex-col items-center justify-center w-full">
        <NavigationTag />
        <ListCard />
      </main>
    </div>
  );
}
