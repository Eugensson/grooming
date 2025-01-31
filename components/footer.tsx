import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Footer = () => {
  return (
    <footer className="py-8 lg:py-4 bg-orange">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-y-6 text-white">
          <Logo footer />
          <p className="text-sm">&copy; Copyright 2025. Усі права захищені</p>
          <Socials />
        </div>
      </div>
    </footer>
  );
};
