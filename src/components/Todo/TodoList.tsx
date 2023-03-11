import { ChangeEvent, useEffect, useState } from "react";
import { Todo } from "../../types";
interface Props {
  element: Todo;
  onChangeEdit: (newValue: Todo, id: string) => void;
  deleteItem: (id: string) => void;
}
const initialForm: Todo = {
  id: "",
  name: "",
  email: "",
  age: 0,
};
export default function TodoList({ element, onChangeEdit, deleteItem }: Props) {
  const [dataElement, setDataElement] = useState<Todo>(element);
  const [isEdit, setisEdit] = useState<Boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataElement({ ...dataElement, [e.target.name]: e.target.value });
  };
  const handleChangeNewValue = () => {
    onChangeEdit(dataElement, element.id);
    setisEdit(!isEdit);
  };

  return (
    <tr>
      <td>{element.id}</td>
      <td>
        {isEdit ? (
          <input
            type="text"
            value={dataElement.name}
            onChange={handleChange}
            name="name"
          />
        ) : (
          element.name
        )}
      </td>
      <td>
        {isEdit ? (
          <input
            type="text"
            value={dataElement.email}
            onChange={handleChange}
            name="email"
          />
        ) : (
          element.email
        )}
      </td>
      <td>
        {isEdit ? (
          <input
            type="number"
            value={dataElement.age}
            onChange={handleChange}
            name="age"
          />
        ) : (
          element.age
        )}
      </td>
      <td>
        {isEdit ? (
          <button onClick={handleChangeNewValue}>Confirm</button>
        ) : (
          <button onClick={() => setisEdit(!isEdit)}>Edit</button>
        )}
      </td>
      <td>
        <button onClick={() => deleteItem(element.id)}>Delete</button>
      </td>
    </tr>
  );
}
