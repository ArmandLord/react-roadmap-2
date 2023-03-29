import dataForm from "../data/custom-form.json";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Fragment } from "react";
import * as Yup from "yup";
import { MyLabel } from "armex-design-system";

const DinamicForm = () => {
  const initialValues: { [key: string]: any } = {};

  for (const data of dataForm) {
    initialValues[data.name] = data.initialValue;
  }

  console.log(initialValues);

  return (
    <div>
      <h1>DinamicForm</h1>
      <br />
      <MyLabel
        label="prueba con exito"
        size="h1"
        color="primary"
        allCaps={true}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: Yup.string(),
          // [a.name] = a.schema
        })}
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
