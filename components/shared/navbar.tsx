import { Palmtree } from "lucide-react";
import React from "react";
import NavMobile from "./NavMobile";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col p-5 max-sm:hidden">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-3">
            <Palmtree className="size-8" />
            <h3 className="text-4xl font-semibold max-md:text-2xl">
              Rocky Point Vacay
            </h3>
          </div>
        </div>
      </nav>

      <div className="hidden max-md:block">
        <NavMobile />
      </div>
    </div>
  );
};

export default Navbar;
