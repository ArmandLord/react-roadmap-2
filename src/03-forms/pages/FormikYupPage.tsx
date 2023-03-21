import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

export interface ValuesFormik {
  firstName: string;
  lastName: string;
  email: string;
}

const FormikYupPage = () => {
  const validate = ({ firstName, lastName, email }: ValuesFormik) => {
    const errors: FormikErrors<ValuesFormik> = {};

    if (!firstName) {
      errors.firstName = "FirstName is required";
    } else if (firstName.length > 15) {
      errors.firstName = "FirstName must be 15 characters or less";
    }

    if (!lastName) {
      errors.lastName = "FirstName is required";
    } else if (lastName.length > 10) {
      errors.lastName = "FirstName must be 10 characters or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

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
      validate,
    });

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
