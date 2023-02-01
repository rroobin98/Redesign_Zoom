import React from "react";

function Card(props) {
  const { icon, title } = props;
  return (
    <section className="flex flex-col font-bold items-center text-xs md:text-lg justify-center border border-zoom-gray hover:shadow-xl hover:text-zoom-blue rounded-xl w-[120px] sm:w-[150px] md:w-[200px] h-36 m-1 cursor-pointer">
      {icon}
      <p className="mt-2">{title}</p>
    </section>
  );
}

export default Card;