import Link from "next/link";

import { socialList } from "@/lib/data";

export const Socials = () => {
  return (
    <ul className="flex items-center gap-x-4">
      {socialList.map(({ icon: Icon, label, href }) => (
        <li
          key={label}
          aria-label={`${label} link`}
          className="size-11 flex items-center justify-center border rounded-full border-black"
        >
          <Link href={href} target="_blank" rel="noreferrer noopener">
            <Icon size={26} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
