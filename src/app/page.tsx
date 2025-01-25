import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products"
import Business from "./components/Business"

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Products />
      <Business />
    </div>
  );
}
