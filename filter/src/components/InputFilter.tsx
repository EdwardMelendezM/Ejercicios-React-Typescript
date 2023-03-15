import { ChangeEvent, useState } from "react";

interface Props {
  onFilterData: (data: string) => void;
}
export default function InputFilter({ onFilterData }: Props) {
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onFilterData(inputValue);
  };

  return (
    <div className="inputFilterContainer">
      <input
        type="text"
        value={inputValue}
        placeholder="category"
        onChange={handleChange}
      />
    </div>
  );
}
