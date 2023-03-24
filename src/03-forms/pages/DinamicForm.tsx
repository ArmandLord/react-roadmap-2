import dataForm from "../data/custom-form.json";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Fragment } from "react";

const DinamicForm = () => {
  const initialValues: { [key: string]: any } = {};

  for (const data of dataForm) {
    initialValues[data.name] = data.initialValue;
  }

  return (
    <div>
      <h1>DinamicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        // validationSchema={}
      >
        {(formik) => (
          <Form>
            {dataForm.map(({ name, type, label, placeholder }, i) => (
              <Fragment key={i}>
                <label htmlFor={name}>{label}</label>
                <Field placeholder={placeholder} name={name} type={type} />
              </Fragment>
            ))}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DinamicForm;
