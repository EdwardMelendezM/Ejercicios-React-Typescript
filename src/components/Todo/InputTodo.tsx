import { useState, ChangeEvent } from "react";
import { Todo } from "../../types";
interface FormState {
  name: string | "";
  email: string;
  age: number;
}
const initialForm = {
  name: "",
  email: "",
  age: 0,
};
interface Prop {
  data: Array<Todo>;
  onCreate: (value: Array<Todo>) => void;
}
export default function InputTodo({ data, onCreate }: Prop) {
  const [formData, setFormData] = useState<FormState>(initialForm);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (formData.name !== "" && formData.email !== "" && formData.age !== 0) {
      const newData = { id: crypto.randomUUID(), ...formData };
      const temp = [...data, newData];
      onCreate(temp);
      setFormData(initialForm);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="put name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="put email"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
        placeholder="put age"
      />
      <button>Enviar</button>
    </form>
  );
}
