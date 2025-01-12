"use client";
import Header from "./components/header/header";
import EggsCard from "./components/eggsCard";
export default function Home() {
  return (
    <div className="h-[926px] w-full bg-background">
      <Header />

      <EggsCard
        id="some-id"
        name="some-name"
        description="some-description"
        bark="some-bark"
        price="some-price"
        grams="some-grams"
        ingredients="some-ingredients"
        type="some-type"
      />
    </div>
  );
}
