import "../styles/styles.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterFormikPage = () => {
  const obj = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  // const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };
  // console.table(registerData);

  return (
    <div>
      <h1>RegisterFormikPage</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={(values) => {
          console.log("🫶🏻", values);
          // envio al backend
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Este campo es requerido")
            .min(2, "Debe tener mas de 2 caracteres")
            .max(15, "Debe tener menos de 15 caracteres"),
          email: Yup.string()
            .email("Debe ser un email valido")
            .required("Este campo es requerido"),
          password: Yup.string()
            .min(6, "Debe tener mas de 6 caracteres")
            .required("Este campo es requerido"),
          repeatPassword: Yup.string()
            .required("Este campo es requerido")
            .oneOf([Yup.ref("password")], "Passwords no coincide"),
        })}
      >
        {({ resetForm }) => (
          <Form>
            <label htmlFor="name">First Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component={"span"} />
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component={"span"} />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component={"span"} />
            <label htmlFor="repeatPassword">Repeat Password</label>
            <Field name="repeatPassword" type="password" />
            <ErrorMessage name="repeatPassword" component={"span"} />
            <br />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => resetForm()}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
