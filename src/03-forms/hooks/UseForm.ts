import { useState, ChangeEvent } from "react";

export const UseForm = <T>(data: T) => {
  const [registerData, setRegisterData] = useState(data);

  const onChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const reset = () => {
    setRegisterData(data);
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...registerData,
    registerData,
    onChanges,
    reset,
    isValidEmail,
  };
};
