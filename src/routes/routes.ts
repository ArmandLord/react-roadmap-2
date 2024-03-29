import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import NoLazyComponent from "../01-lazyload/pages/NoLazyComponent";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
import FastCodeExample from "../00-context/FastCodeExample";
import RegisterPage from "../03-forms/pages/RegisterPage";
import FormikPage from "../03-forms/pages/FormikPage";
import FormikYupPage from "../03-forms/pages/FormikYupPage";
import FormikComponents from "../03-forms/pages/FormikComponents";
import FormikAbastraction from "../03-forms/pages/FormikAbstraction";
import RegisterFormikPage from "../03-forms/pages/RegisterFormikPage";
import DinamicForm from "../03-forms/pages/DinamicForm";

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
  {
    to: "/fast-code",
    path: "fast-code",
    Component: FastCodeExample,
    name: "Fast Code Page",
  },
  {
    to: "/shopping",
    path: "shopping",
    Component: ShoppingPage,
    name: "Shopping Page",
  },
  {
    to: "/register",
    path: "register",
    Component: RegisterPage,
    name: "Register Page",
  },
  {
    to: "/formik",
    path: "formik",
    Component: FormikPage,
    name: "Formik Page",
  },
  {
    to: "/formik-yup",
    path: "formik-yup",
    Component: FormikYupPage,
    name: "Formik Yup Page",
  },
  {
    to: "/formik-components",
    path: "formik-components",
    Component: FormikComponents,
    name: "Formik Components Page",
  },
  {
    to: "/formik-abstraction",
    path: "formik-abstraction",
    Component: FormikAbastraction,
    name: "Formik abstraction Page",
  },
  {
    to: "/register-formik-page",
    path: "register-formik-page",
    Component: RegisterFormikPage,
    name: "Register Formik abstraction Page",
  },
  {
    to: "/dinamic-form",
    path: "dinamic-form",
    Component: DinamicForm,
    name: "Dinamic Form Page",
  },
];
