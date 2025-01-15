import { Footer } from "@/components/shared/Footer";
import { NavBar } from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/toaster";
import React, { ReactNode } from "react";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
