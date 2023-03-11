import { Todo } from "../../types";

interface Props {
  element: Todo;
}
export default function TodoList({ element }: Props) {
  return (
    <tr>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.email}</td>
      <td>{element.age}</td>
    </tr>
  );
}
