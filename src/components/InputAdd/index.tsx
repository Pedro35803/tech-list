import { useState } from "react";
import circleIcon from "../../img/pluss-circle.svg";
import { PropsType } from "./props";
import "./style.css";

export default function Search({ callbackAddTec }: PropsType) {
  const [value, setValue] = useState("");

  const onClick = () => {
    callbackAddTec(value);
    setValue("");
  };

  return (
    <div className="section-input">
      <input
        type="text"
        placeholder="Adicione uma nova tecnologia"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={onClick}>
        <p>Criar</p>
        <img src={circleIcon} />
      </button>
    </div>
  );
}
