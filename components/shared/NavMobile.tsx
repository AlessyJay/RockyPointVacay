"use client";

import React from "react";
import { NavLinks } from "@/lib";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavMobile = () => {
  const pathname = usePathname();
  return (
    <footer className="fixed inset-x-0 bottom-0 z-20 w-full rounded-sm bg-background p-5">
      <div className="flex w-full justify-between">
        {NavLinks.map((tab) => {
          const isActive =
            (pathname.includes(tab.path) && tab.path.length > 1) ||
            pathname === tab.path;
          return (
            <Link key={tab.id} id={tab.id.toString()} href={tab.path}>
              <div
                key={tab.id}
                id={tab.id.toString()}
                className={`${isActive ? "" : "opacity-60"} flex w-full justify-center`}
              >
                {React.createElement(tab.icon)}
              </div>
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default NavMobile;
