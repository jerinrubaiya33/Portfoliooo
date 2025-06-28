"use client"
import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "./components/RenderModel";
import Laptop from "./components/models/laptop";
import Navigation from "./components/navigation/navigation";
export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-center opacity-50"
      />
      <div className="w-full h-screen">
        {/* navigation and 3d model*/}
        <Navigation />
        <RenderModel defaultZoom={180} hoverZoom={110}>
          <Laptop />
        </RenderModel>
      </div>
    </main>
  );
}