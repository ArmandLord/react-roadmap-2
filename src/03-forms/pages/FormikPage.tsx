import { useFormik } from "formik";
import "../styles/styles.css";

const FormikPage = () => {
  return (
    <div>
      <h1>FormikPage</h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" />
        <span>Proporciona un nombre valido</span>
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />
        <span>Proporciona un apellido valido</span>
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <span>Proporciona un email valido</span>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormikPage;
