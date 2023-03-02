import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import NoLazyComponent from "../01-lazyload/pages/NoLazyComponent";

type ReactElement = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: ReactElement | LazyExoticComponent<ReactElement>;
  name: string;
}

// 🚨 Con el comentario de webpackChunkName se puede definir el nombre del chunk
const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);
// const LazyComponent2 = lazy(
//   () =>
//     import(/* webpackChunkName LazyPage1 */ "../01-lazyload/pages/LazyPage2")
// );
// const LazyComponent3 = lazy(
//   () =>
//     import(/* webpackChunkName LazyPage1 */ "../01-lazyload/pages/LazyPage3")
// );

export const routes: Route[] = [
  {
    to: "/lazylayout/",
    path: "/lazylayout/*",
    Component: LazyLayout,
    name: "Lazy Layout Page",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazyComponent,
    name: "No Lazy Page",
  },
  //   {
  //     to: "/lazy3",
  //     path: "lazy3",
  //     Component: LazyComponent3,
  //     name: "Lazy Page 3",
  //   },
];
