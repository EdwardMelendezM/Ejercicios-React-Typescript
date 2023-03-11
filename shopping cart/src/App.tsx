import { ChangeEvent, MouseEvent, useState } from "react";
import useTask from "./components/useTask";

export interface Todo {
  id: string;
  task: string;
  time: string;
}
export interface formData {
  task: string;
  time: string;
}
const initialData = [
  {
    id: "1",
    task: "Hacer nada",
    time: "10m",
  },
  {
    id: "2",
    task: "Comer",
    time: "50min",
  },
];

export default function App() {
  const [data, setData] = useState<Array<Todo>>(initialData);
  const [inputValue, dispatch] = useTask();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };
  const handleClickAdd = (e: MouseEvent<HTMLButtonElement>) => {
    const newData = {
      id: crypto.randomUUID(),
      ...inputValue,
    };
    setData([...data, newData]);
  };
  return (
    <div>
      <h3>Task</h3>
      <input
        type="text"
        value={inputValue.task}
        onChange={handleChangeInput}
        name="task"
      />
      <input
        type="text"
        value={inputValue.time}
        onChange={handleChangeInput}
        name="time"
      />
      <button onClick={handleClickAdd}>add</button>
      <div>
        {data.map((el) => (
          <div key={el.id}>
            <div>{el.task}</div>
            <div>{el.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
