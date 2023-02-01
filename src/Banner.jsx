import React from "react";
import WheelImg from "../public/zoom_wheel_big.png";

function Banner() {
  return (
    <article className="flex flex-col items-center md:flex-row bg-zoom-darkblue3 md:px-[5%] py-8 md:py-0 text-blue-200 my-8">
      <section className="px-[10%] md:px-0">
        <img className="object-contain" src={WheelImg} alt="wheel of zoom" />
      </section>
      <section className="flex flex-col justify-center items-center md:items-start px-10">
        <h1 className="text-2xl lg:text-4xl font-semibold pt-4 md:pt-0">
          Make work less work
        </h1>
        <p className="text-sm lg:text-base font-semibold py-5">
          Securely connect and collaborate so you can work better together.
          Simple to manage and delightful to use, Zoom powers the modern
          workforce.
        </p>
        <a className="font-bold hover:text-blue-400" href="">
          Discover the Possibilities
        </a>
      </section>
    </article>
  );
}

export default Banner;