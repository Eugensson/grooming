import Image from "next/image";

export const Program = () => {
  return (
    <section>
      <div className="flex items-baseline justify-end lg:gap-x-2.5">
        <Image
          src="/images/phone.svg"
          width={28}
          height={28}
          alt="Phone icon"
          className="object-cover object-center aspect-square lg:size-9"
        />
        <p className="lg:text-2xl text-blue font-extrabold">
          +38 (077) 123-45-67
        </p>
      </div>
      <div className="text-sm">
        <p className="text-right lg:hidden">Пн-Нд 8:00-20:00</p>
        <p className="hidden lg:flex justify-end text-base font-semibold">
          Години роботи: Пн-Нд 8:00-20:00
        </p>
      </div>
    </section>
  );
};
