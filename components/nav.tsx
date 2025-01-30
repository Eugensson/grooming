import Link from "next/link";

import { navList } from "@/lib/data";

export const Nav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-x-10 xl:text-lg">
        {navList.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="capitalize hover:text-orange transition-all"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
