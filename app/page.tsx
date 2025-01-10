"use client";
import Header from "./components/header/header";
import EggsCard from "./components/eggsCard";
export default function Home() {
  return (
    <div className="h-full w-full bg-background">
      <Header />
      <div className="flex items-center justify-center py-3">
        <span className="text-2xl font-bold text-primary">Cardápio</span>
      </div>
      <EggsCard />
    </div>
  );
}
