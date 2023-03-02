import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type ReactElement = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: ReactElement | LazyExoticComponent<ReactElement>;
  name: string;
}

const LazyComponent1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const LazyComponent2 = lazy(() => import("../01-lazyload/pages/LazyPage2"));
const LazyComponent3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: LazyComponent1,
    name: "Lazy Page 1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: LazyComponent2,
    name: "Lazy Page 2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: LazyComponent3,
    name: "Lazy Page 3",
  },
];
