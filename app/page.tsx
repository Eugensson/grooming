import { Hero } from "@/components/hero";
import { Header } from "@/components/header";

const Home = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-orange-quaternary relative">
      <Header />
      <Hero />
      <div className="h-[2000px]" />
    </div>
  );
};

export default Home;
