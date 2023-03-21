import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

export interface ValuesFormik {
  firstName: string;
  lastName: string;
  email: string;
}

const FormikYupPage = () => {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      // solo se dispara cuando las reglas de validacion son disparadas
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "debe ser menor a 16")
          .required("requerido"),
        lastName: Yup.string()
          .max(15, "debe ser menor a 16")
          .required("requerido"),
        email: Yup.string()
          .email("debe ser un email valido")
          .required("requerido"),
      }),
    });

  console.log(errors);

  return (
    <div>
      <h1>FormikYupPage</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
