"use client";

import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Program } from "@/components/program";
import { NavMobile } from "@/components/nav-mobile";

export const Header = () => {
  const [bg, setBg] = useState<boolean>(false);
  const [navMobile, setNavMobile] = useState<boolean>(false);

  useEffect(() => {
    return window.addEventListener("scroll", () =>
      window.scrollY > 50 ? setBg(true) : setBg(false)
    );
  }, []);

  return (
    <header
      className={twMerge(
        "fixed left-0 right-0 top-0 z-10 w-full py-5 bg-transparent transition-all duration-300",
        bg && "bg-white py-3 shadow-md"
      )}
    >
      <div className="container flex items-center justify-between">
        <Logo />
        <Nav />
        <Program />
        <button
          type="button"
          onClick={() => setNavMobile((prev) => !prev)}
          className="lg:hidden cursor-pointer"
        >
          <CgMenuRight size={30} className="text-blue" />
        </button>
        <div
          className={twMerge(
            "fixed left-0 top-[78px] w-full h-full shadow-lg overflow-hidden transition-all bg-yellow",
            navMobile ? "max-h-[260px]" : "max-h-0"
          )}
        >
          <NavMobile />
        </div>
      </div>
    </header>
  );
};
