import { useState, ChangeEvent } from "react";

export const UseForm = <T>(data: T) => {
  const [registerData, setRegisterData] = useState(data);

  const onChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    ...registerData,
    registerData,
    onChanges,
  };
};
