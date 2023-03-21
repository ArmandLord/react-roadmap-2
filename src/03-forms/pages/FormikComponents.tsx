import { Formik, Field, Form, ErrorMessage } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

const FormikComponents = () => {
  return (
    <div>
      <h1>FormikComponents</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "debe ser menor a 16")
            .required("requerido"),
          lastName: Yup.string()
            .max(15, "debe ser menor a 16")
            .required("requerido"),
          email: Yup.string()
            .email("debe ser un email valido")
            .required("requerido"),
          terms: Yup.boolean()
            .required()
            .isTrue("Debes aceptar los terminos y condiciones"),
          jobType: Yup.string()
            // developer no es valido
            .oneOf(
              [
                "developer-react",
                "developer-vue",
                "developer-next",
                "developer-remix",
              ],
              "Selecciona un job valido"
            )
            .required(),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage component={"span"} name="firstName" />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage component={"span"} name="lastName" />
            <br />

            <label htmlFor="email">email</label>
            <Field name="email" type="email" />
            <ErrorMessage component={"span"} name="email" />
            <br />

            <label>
              <Field name="terms" type="checkbox" />
              terms and conditions
            </label>
            <ErrorMessage component={"span"} name="terms" />
            <br />

            <label htmlFor="jobType"></label>
            <Field name="jobType" as="select">
              <option value="select-job">Select a job</option>
              <option value="developer">Developer</option>
              <option value="developer-react">Developer React</option>
              <option value="developer-vue">Developer Vue</option>
              <option value="developer-next">Developer Next</option>
              <option value="developer-remix">Developer Remix</option>
            </Field>
            <ErrorMessage component={"span"} name="jobType" />

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponents;
