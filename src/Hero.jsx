import React from "react";
import BoardImg from "../public/together.jpg";
import ConfImg from "../public/together2.jpg";

function Hero() {
  return (
    <main className="flex w-full justify-center">
      <div className="flex flex-col md:flex-row w-[80%] md:w-[90%] md:h-[500px] justify-center">
        <section className="md:w-2/4  py-20 px-4">
          <h1 className="text-[32px] md:text-[64px] text-zoom-darkblue2 leading-none">
            One platform <br />
            to <span className="text-zoom-lightblue">connect</span>
          </h1>
          <p className="text-sm md:text-xl py-6">
            Bring teams together, reimagine workspaces, engage new audiences,
            and delight your customers - all on the Zoom platform you know and
            love.
          </p>
          <button className="bg-zoom-lightblue text-zoom-white hover:shadow-xl py-2 px-5 rounded-3xl text-sm md:text-base">
            Plans & Pricing
          </button>
          <button className="text-zoom-lightblue  hover:shadow-xl ml-2 md:ml-4 text-sm md:text-base">
            Sign Up, It's Free
          </button>
        </section>
        <aside className="flex flex-col md:w-2/4 px-8">
          <img
            className="rounded-xl self-end mt-4 md:w-[350px]"
            src={BoardImg}
            alt="Picture of zoom-meeting"
          />
          <img
            className="rounded-xl mt-4 md:w-[350px]"
            src={ConfImg}
            alt="Picture of zoom-meeting"
          />
        </aside>
      </div>
    </main>
  );
}

export default Hero;