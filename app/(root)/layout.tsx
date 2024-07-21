import { Toaster } from "@/components/ui/toaster";
import React, { ReactNode } from "react";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      {children}
      <Toaster />
    </div>
  );
};

export default Layout;
