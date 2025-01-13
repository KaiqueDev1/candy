// Componente Home
"use client";
import Header from "./components/header/header";
import EggsCard from "./components/eggsCard";

export default function Home() {
  return (
    <div className="h-[926px] w-full bg-background">
      <Header />

      <EggsCard />
    </div>
  );
}
