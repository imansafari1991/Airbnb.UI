import NavigationTag from "../components/navigation/NavigationTag";
import ListCard from "../components/list/ListCard";
import { ResponsiveHeader } from "@/components/header/_components/Responsive-Header";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center  pb-20  font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <ResponsiveHeader />
      </header>
      <main className="flex flex-col items-center justify-center w-full mt-40">
        <NavigationTag />
        <ListCard />
      </main>
    </div>
  );
}
