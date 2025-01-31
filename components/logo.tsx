import Link from "next/link";
import Image from "next/image";

import logoImage from "@/public/images/logo.svg";
import logoImageWhite from "@/public/images/logo-white.svg";

export const Logo = ({ footer = false }: { footer?: boolean }) => {
  return (
    <Link href="/">
      <Image src={footer ? logoImageWhite : logoImage} alt="logo" />
    </Link>
  );
};
