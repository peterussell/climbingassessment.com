import { useRoutes } from "react-router-dom";

import { LandingPage } from "@/features/landingPage";

import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <LandingPage /> }];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
