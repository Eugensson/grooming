import { GrYoutube } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";

import HeroSlideImage1 from "@/public/images/dogs/dog-slide-1.png";
import HeroSlideImage2 from "@/public/images/dogs/dog-slide-2.png";
import HeroSlideImage3 from "@/public/images/dogs/dog-slide-3.png";

export const navList = [
  {
    label: "головна",
    href: "/",
  },
  {
    label: "ціни",
    href: "#prices",
  },
  {
    label: "контакти",
    href: "#contact",
  },
  {
    label: "запис на прийом",
    href: "#",
  },
];

export const socialList = [
  {
    label: "Facebook",
    icon: RiFacebookBoxFill,
    href: "https://www.facebook.com",
  },
  {
    label: "Instagram",
    icon: RiInstagramFill,
    href: "https://www.instagram.com",
  },
  {
    label: "Youtube",
    icon: GrYoutube,
    href: "https://www.youtube.com",
  },
];

export const heroSliderList = [
  {
    id: "1",
    title: "Піклуємось про вашого улюбленця!",
    image: HeroSlideImage1,
    subtitle:
      "Професійний догляд, вигул та грумінг. Ваша собака отримає найкращий сервіс з любов’ю та турботою.",
    buttonText: "Записатися",
  },
  {
    id: "2",
    title: "Комфорт та безпека на першому місці",
    image: HeroSlideImage2,
    subtitle:
      "Наші спеціалісти забезпечують спокійний догляд, адаптований до потреб вашого улюбленця.",
    buttonText: "Записатися",
  },
  {
    id: "3",
    title: "Якісні послуги для щасливих хвостиків",
    image: HeroSlideImage3,
    subtitle:
      "Ми використовуємо лише перевірені методи догляду та створюємо дружню атмосферу для кожного собаки.",
  },
];
