import { useEffect, useState } from "react";
import { data } from "../data";
import { Data } from "../types";
import InputFilter from "./InputFilter";
import TableFilter from "./TableFilter";
export default function Filter() {
  const [allData, setAllData] = useState<Array<Data>>(data);
  const handleFilterDataForInput = (data: string) => {
    const temp = [...allData];
    const filterData = temp.filter((el) => el.category.includes(data));
    setAllData(filterData);
    console.log(allData);
  };

  return (
    <div className="containerFilter">
      <InputFilter onFilterData={handleFilterDataForInput} />
      <TableFilter data={data} />
    </div>
  );
}
