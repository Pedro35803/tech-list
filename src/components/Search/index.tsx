import { useState } from "react";
import circleIcon from "../../img/pluss-circle.svg";
import { PropsType } from "./props"
import "./style.css";

export default function Search({ callbackAddTec, callbackSearchTec }: PropsType) {
    const [value, setValue] = useState("");

    return (
        <div className="section-input">
            <input
                type="text"
                placeholder="Adicione uma nova tecnologia"
                onChange={(e) => {
                    setValue(e.target.value);
                    callbackSearchTec(value);
                }}
            />
            <button onClick={() => callbackAddTec(value)}>
                <p>Criar</p>
                <img src={circleIcon} />
            </button>
        </div>
    );
}
