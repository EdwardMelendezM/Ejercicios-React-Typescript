import TodoList from "./Todo/TodoList";

interface Props {
  data: Array<{
    readonly id: string;
    name: string | "";
    email: string;
    age: number;
  }>;
}
export default function TableTodo({ data }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((elem) => (
            <TodoList element={elem} key={crypto.randomUUID()} />
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
