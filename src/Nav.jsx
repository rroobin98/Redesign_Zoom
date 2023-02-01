import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Nav() {
  return (
    <nav className="flex flex-row items-center justify-between lg:justify-center py-4 px-4 lg:px-0 font-sans text-base">
      <img src="https://st2.zoom.us/static/6.3.10815/image/new/topNav/Zoom_logo.svg" />
      <div className="hidden lg:block">
        <ul className="flex flex-row space-x-6 pl-6 text-zoom-gray">
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Plans & Pricing</li>
        </ul>
      </div>

      <nav className="hidden sm:block">
        <button className="text-zoom-darkblue border border-zoom-darkblue hover:shadow-lg py-2 px-5 rounded-3xl font-bold sm:ml-[100px] lg:ml-[150px] xl:ml-[300px] mr-2">
          Contact Sales
        </button>
        <button className="text-zoom-darkblue border border-zoom-darkblue hover:shadow-lg py-2 px-5 rounded-3xl font-bold">
          Sign Up Free
        </button>
      </nav>
      <div className="block lg:hidden text-3xl text-zoom-lightblue ml-4">
        <RxHamburgerMenu />
      </div>
    </nav>
  );
}

export default Nav;