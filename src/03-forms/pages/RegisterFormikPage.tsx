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
          console.log(values);
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
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="name">First Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component={"span"} />
            {/* <input
              onChange={onChanges}
              type="text"
              placeholder="Name:"
              value={name}
              name="name"
              className={`${name.trim().length <= 0 && "has-error"}`}
            />
            <span>{name.trim().length <= 0 && "Este campo es necesario"}</span>
            <input
              onChange={onChanges}
              type="email"
              placeholder="Email:"
              value={email}
              name="email"
              className={`${!isValidEmail(email) && "has-error"}`}
            />
            <span>{!isValidEmail(email) && "Tiene que ser de tipo email"}</span>
            <input
              onChange={onChanges}
              type="password"
              placeholder="Password:"
              value={password}
              name="password"
            />

            {password.trim().length < 6 && password.trim().length > 0 && (
              <span>La contraseña debe tener mas de 6 caracteres</span>
            )}

            <input
              onChange={onChanges}
              type="password"
              placeholder="Repeat Password:"
              value={repeatPassword}
              name="repeatPassword"
            />
            {password !== repeatPassword && (
              <span>Las contraseñas no coinciden</span>
            )}
            <span>{}</span>
            <button type="submit">Register</button>
            <button onClick={reset}>Reset</button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
