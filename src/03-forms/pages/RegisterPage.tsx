import { FormEvent } from "react";
import "../styles/styles.css";
import { UseForm } from "../hooks/UseForm";

const RegisterPage = () => {
  const obj = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const { registerData, onChanges } = UseForm(obj);

  const { name, email, password, repeatPassword } = registerData;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };
  // console.table(registerData);

  return (
    <div>
      <h1>RegisterPage</h1>
      {/* Agregamos noValidate para que el navegador no valide el input email */}
      <form onSubmit={onSubmit} noValidate>
        <input
          onChange={onChanges}
          type="text"
          placeholder="Name:"
          value={name}
          name="name"
        />
        <input
          onChange={onChanges}
          type="email"
          placeholder="Email:"
          value={email}
          name="email"
        />
        <input
          onChange={onChanges}
          type="password"
          placeholder="Password:"
          value={password}
          name="password"
        />
        <input
          onChange={onChanges}
          type="password"
          placeholder="Repeat Password:"
          value={repeatPassword}
          name="repeatPassword"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
