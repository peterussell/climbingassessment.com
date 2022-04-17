import * as React from "react";

import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="assessment__container">
      {children}
    </div>
  )
};
