import React, { ReactNode } from "react";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <div>{children}</div>;
};

export default Layout;
