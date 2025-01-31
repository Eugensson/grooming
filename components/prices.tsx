"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

import { Bundles } from "@/components/bundles";

import { priceList } from "@/lib/data";

export type Service = {
  subtitle: string;
  price: number;
  list: string[];
};

export type PriceListItem = {
  id: string;
  title: string;
  image: string;
  dogCategory: string;
  services: Service[];
};

export const Prices = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [bundles, setBundles] = useState(priceList[0].services);

  useEffect(() => {
    setBundles(priceList[0].services);
  }, []);

  const getBundle = (title: string) => {
    const selectedBundle = priceList.find((bundle) => bundle.title === title);

    if (!selectedBundle) return;

    setBundles(selectedBundle.services);
  };

  return (
    <section className="py12 lg:py-24">
      <div className="container">
        <div className="mb-20 text-center">
          <p className="mb-3 text-orange font-semibold capitalize">Наші ціни</p>
          <h2 className="h2 mb-3">Наскільки великий Ваш улюбленець?</h2>
          <p className="text-lg text-blue ">Оберіть відповідну категорію</p>
        </div>
        <ul className="grid grid-cols-4 gap-4 lg:gap-8">
          {priceList.map(({ id, title, image, dogCategory }) => (
            <li
              key={id}
              onClick={() => {
                getBundle(title);
                setCurrentIndex(Number(id) - 1);
              }}
              className="text-center cursor-pointer"
            >
              <div className="mb-2 lg:mb-8 hover:scale-105 transition-transform duration-300">
                <Image src={image} alt="Зображення собаки" className="w-full" />
              </div>
              <h3 className="lg:mb-2 lg:text-2xl capitalize font-semibold text-blue">
                {title}
              </h3>
              <div
                className={twMerge(
                  "pb-4 mb-12 border-b-4",
                  currentIndex + 1 === Number(id)
                    ? "relative border-orange transition-all after:lg:size-5 after:bg-triangle after:lg:bg-no-repeat after:lg:block after:lg:absolute after:lg:left-[130px] after:lg:-bottom-6"
                    : "border-transparent"
                )}
              >
                <p className="hidden lg:block capitalize">{dogCategory}</p>
              </div>
            </li>
          ))}
        </ul>
        <Bundles bundles={bundles} />
      </div>
    </section>
  );
};
