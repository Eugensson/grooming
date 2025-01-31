import Image from "next/image";

import dogImg from "@/public/images/dogs/dog-contact.png";

export const Contact = () => {
  return (
    <section className="bg-yellow-secondary pt-6">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="order-1 lg:-order-1 lg:mt-16">
            <Image
              src={dogImg}
              alt="Зображення лежачого собаки"
              className="-mb-3"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-orange font-semibold mb-4">Контакти</p>
            <p className="text-4xl font-extrabold text-blue">
              +38 (077) 123-45-67
            </p>
            <p className="mb-8 text-blue">Години роботи: Пн-Нд 8:00-20:00</p>
            <button type="button" className="btn">
              Запиcатися на прийом
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
