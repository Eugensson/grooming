import Link from "next/link";
import Image from "next/image";

import logoImage from "@/public/images/logo.svg";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src={logoImage} alt="logo" />
    </Link>
  );
};
