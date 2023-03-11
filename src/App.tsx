import { useEffect, useState } from "react";
import TableTodo from "./components/TableTodo";
import InputTodo from "./components/Todo/InputTodo";
import { Todo } from "./types";

export default function App() {
  const [data, setData] = useState<Array<Todo>>([]);
  const handleNewElement = (newData: Array<Todo>) => {
    setData(newData);
  };
  return (
    <div>
      <h2>Data</h2>
      <InputTodo data={data} onCreate={handleNewElement} />
      <TableTodo data={data} />
    </div>
  );
}
