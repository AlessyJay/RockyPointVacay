import Navbar from "@/components/shared/navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
