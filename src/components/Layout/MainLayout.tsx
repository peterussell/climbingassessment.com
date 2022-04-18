import * as React from "react";

import "./mainLayout.scss";

type MainLayoutProps = {
  children: React.ReactNode
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="mainLayout__container">
      <div className="mainLayout__container--content">
        {children}
      </div>
    </div>
  )
};
