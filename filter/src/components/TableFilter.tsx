import { useEffect } from "react";
import { Data } from "../types";

interface Props {
  data: Array<Data>;
}
export default function TableFilter({ data }: Props) {
  return (
    <div className="elementName">
      {data.map((el) => (
        <div key={el.id} className="elementNameCategory">
          <div>{el.name}</div>
          <div>{el.category}</div>
        </div>
      ))}
    </div>
  );
}
