import React from "react";
import { Link } from "react-router-dom";

import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode,
  title: string,
  startText: string
};

export const Layout = ({ children, title, startText }: LayoutProps) => {
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
          <Link to="/assessment">
            {startText}
          </Link>
        </div>
      </div>
    </div>
  )
};
