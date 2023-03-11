import { useReducer } from "react";
import { formData } from "../App";

interface FormState {
  inputValue: formData;
}
type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

export const INITIAL_STATE: formData = {
  task: "",
  time: "",
};

function formReducer(
  state: FormState["inputValue"],
  action: FormReducerAction
) {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return { ...state, [inputName]: inputValue };
    case "clear":
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default function useTask() {
  return useReducer(formReducer, INITIAL_STATE);
}
