import React from "react";
import Card from "./Card";
import { FaGraduationCap } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { TbBuildingBank } from "react-icons/tb";
import { MdLocalHospital } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { ImPriceTag } from "react-icons/im";

function Article() {
  return (
    <article className="flex flex-col lg:flex-row px-[10%] lg:px-[5%] text-zoom-darkblue3 items-center my-12">
      <section className="lg:w-[50%]">
        <h1 className=" text-[22px] lg:text-4xl font-semibold">
          Powering organizations across industries and geographies
        </h1>
        <p className="py-5 pr-5 text-slate-600">
          Zoom helps consolidate communications, connect people, and collaborate
          better together in the boardroom, classroom, operating room, and
          everywhere in between.
        </p>
        <button className="bg-zoom-green-blue py-2 px-5 rounded-3xl mb-4 lg:mb-0 hover:shadow-lg">
          Explore Industry Solutions
        </button>
      </section>
      <section className="lg:w-[50%] flex flex-wrap justify-center">
        <Card icon={<FaGraduationCap />} title={"Education"} />
        <Card icon={<GiMoneyStack />} title={"Financial Services"} />
        <Card icon={<TbBuildingBank />} title={"Government"} />
        <Card icon={<MdLocalHospital />} title={"Healthcare"} />
        <Card icon={<GiFactory />} title={"Manufacturing"} />
        <Card icon={<ImPriceTag />} title={"Retail"} />
      </section>
    </article>
  );
}

export default Article;