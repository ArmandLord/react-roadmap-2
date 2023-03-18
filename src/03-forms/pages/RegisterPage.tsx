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
  const { registerData, onChanges, reset, isValidEmail } = UseForm(obj);

  const { name, email, password, repeatPassword } = registerData;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <input
          onChange={onChanges}
          type="password"
          placeholder="Repeat Password:"
          value={repeatPassword}
          name="repeatPassword"
        />
        <button type="submit">Register</button>
        <button onClick={reset}>Reset</button>
      </form>
    </div>
  );
};

export default RegisterPage;
