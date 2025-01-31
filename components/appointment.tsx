import dogImage from "@/public/images/dogs/dog-appointment.png";
import Image from "next/image";

export const Appointment = () => {
  return (
    <section className="relative min-h-[584px] py-12 lg:pb-12 lg:mt-32 bg-yellow-secondary">
      <div className="container">
        <div className="hidden lg:flex justify-center w-full max-w-[790px] mx-auto">
          <Image src={dogImage} alt="Зображення лежачого собаки" />
        </div>
        <form className="flex flex-col justify-start items-center gap-4 px-6 py-8 lg:-mt-5 mx-auto w-full max-w-3xl h-[500px] rounded-[60px] text-center bg-yellow">
          <h2 className="h2 my-4">Записатися на прийом</h2>
          <input
            type="text"
            name="name"
            id="name"
            className="input-control"
            placeholder="Iм'я"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="input-control"
            placeholder="Електронна пошта"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            className="input-control"
            placeholder="Контактний телефон"
          />
          <button type="submit" className="btn w-full max-w-[514px]">
            Надіслати заявку
          </button>
        </form>
      </div>
    </section>
  );
};
