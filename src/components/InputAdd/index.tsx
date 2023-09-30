import { useState } from "react";
import circleIcon from "../../img/pluss-circle.svg";
import { PropsType } from "./props";
import "./style.css";

export default function Search({ callbackAddTec }: PropsType) {
  const [value, setValue] = useState("");

  const submit = (event: any) => {
    event.preventDefault();
    if (value.trim() !== "") {
      callbackAddTec(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={submit} className="section-input" noValidate>
      <input
        type="text"
        placeholder="Adicione uma nova tecnologia"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button>
        <p>Criar</p>
        <img src={circleIcon} />
      </button>
    </form>
  );
}
