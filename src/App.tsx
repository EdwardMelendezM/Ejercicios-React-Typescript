import { useRef, useState } from "react";
import TableTodo from "./components/TableTodo";
import InputTodo from "./components/Todo/InputTodo";
import { Todo } from "./types";

export default function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<Array<Todo>>([]);
  const handleNewElement = (newData: Array<Todo>) => {
    setData(newData);
  };
  const handleEditNewValue = (newValue: Todo, id: string) => {
    const item = data.find((item) => item.id === id);
    if (item) {
      item.name = newValue.name;
      item.email = newValue.email;
      item.age = newValue.age;
    }
  };
  const deleteItem = (id: string) => {
    const temp = data.filter((elem) => elem.id !== id);
    setData(temp);
  };
  return (
    <div ref={divRef}>
      <h2>Data</h2>
      <InputTodo data={data} onCreate={handleNewElement} />
      <TableTodo
        data={data}
        onChangeEdit={handleEditNewValue}
        deleteItem={deleteItem}
      />
    </div>
  );
}
