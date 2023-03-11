import { useState, ChangeEvent } from "react";
interface FormState {
  name: string | "";
  email: string;
  age: number;
}

export default function InputTodo() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    age: 0,
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData);
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
