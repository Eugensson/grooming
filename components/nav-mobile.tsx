import Link from "next/link";

import { navList } from "@/lib/data";

export const NavMobile = () => {
  return (
    <nav className="h-full">
      <ul className="h-full flex flex-col items-center justify-center gap-y-5">
        {navList.map(({ label, href }) => (
          <li key={label} className="capitalize font-medium text-blue">
            <Link href={href} className="">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
