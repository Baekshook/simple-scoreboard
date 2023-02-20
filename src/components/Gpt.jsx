import React from "react";
import { useState } from "react";

export default function Gpt() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    setResult(result + parseInt(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAdd}>더하기</button>
      <div>{result}</div>
    </div>
  );
}
