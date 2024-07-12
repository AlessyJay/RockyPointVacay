import { Palmtree, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import NavMobile from "./NavMobile";

const Navbar = () => {
  return (
    <nav className="flex p-5">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-3">
          <Palmtree />
          <h3 className="text-lg font-semibold">Rocky Point Vacay</h3>
        </div>

        <div className="hidden max-md:block">
          <Sheet>
            <SheetTrigger asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader className="flex flex-col items-center">
                <SheetTitle className="text-center text-2xl">
                  Rocky Point Vacay
                </SheetTitle>

                <div className="my-10 w-full border" />

                <NavMobile />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
