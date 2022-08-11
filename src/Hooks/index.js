import { useState } from "react";
import { initialState } from "../Reducer";

export function useForm(initValue) {
  const [fields, setFields] = useState(initValue);

  function handleForm(e, action = null) {
    if (e) {
      let target = e.target;
      setFields({ ...fields, [target.name]: target.value });
    }

    if (action) {
      if (action === "empty") {
        setFields(initValue);
      }
    }
  }

  return [fields, handleForm];
}
