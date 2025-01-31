import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { Prices } from "@/components/prices";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";
import { Appointment } from "@/components/appointment";

const Home = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-orange-quaternary relative">
      <Header />
      <Hero />
      <Appointment />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
