import React from "react";

import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode,
  title: string,
  buttonText: string
};

export const Layout = ({ children, title, buttonText }: LayoutProps) => {
  return (
    <div className="landing__container">
      <div className="landing__content">

        <div className="landing__content--title">
          <h1>{title}</h1>
        </div>
        <div className="landing__content--description">
          {children}
        </div>
        <div className="landing__content--button">
          {/* TODO: create a button component */}
          {buttonText}
        </div>

      </div>
    </div>
  )
};
