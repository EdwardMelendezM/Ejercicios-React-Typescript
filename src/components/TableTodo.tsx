import { Todo } from "../types";
import TodoList from "./Todo/TodoList";

interface Props {
  data: Array<{
    readonly id: string;
    name: string | "";
    email: string;
    age: number;
  }>;
  onChangeEdit: (newValue: Todo, id: string) => void;
  deleteItem: (id: string) => void;
}

export default function TableTodo({ data, onChangeEdit, deleteItem }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((elem) => (
            <TodoList
              element={elem}
              key={crypto.randomUUID()}
              onChangeEdit={onChangeEdit}
              deleteItem={deleteItem}
            />
          ))
        ) : (
          <tr>
            <td>No hay datos</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
