import { PiPawPrintFill } from "react-icons/pi";

import { Service } from "@/components/prices";

interface BundlesProps {
  bundles: Service[];
}

export const Bundles = ({ bundles }: BundlesProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
      {bundles.map(({ subtitle, price, list }) => (
        <li
          key={subtitle}
          className="py-12 px-6 bg-white shadow-primary text-center rounded-[60px]"
        >
          <p className="text-5xl font-bold text-blue mb-4">&#8372;{price}</p>
          <h3 className="capitalize mb-12 font-medium text-blue">
            Тариф &quot;{subtitle}&quot;
          </h3>
          <ul className="flex flex-col gap-4">
            {list.map((item) => (
              <li key={item}>
                <div className="flex items-center gap-2">
                  <PiPawPrintFill size={20} className="text-orange" />
                  <span className="text-sm xl:text-base">{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
