import { useState } from "react";

export function useForm(initValue) {
  const [fields, setFields] = useState(initValue);

  function handleForm(e) {
    let target = e.target;
    setFields({ ...fields, [target.name]: target.value });
  }

  return [fields, handleForm];
}
