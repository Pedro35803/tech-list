import trash from "../../img/trash.svg";

import { PropsType } from "./props";
import "./style.css";

export default function Card({ data, updateData, deleteData }: PropsType) {
  const update = () => updateData({
    ...data,
    complete: !data.complete
  })
  return (
    <div className="section-card">
      <input type="checkbox" className="checkbox" checked={data.complete} onClick={update} />
      <p className={data.complete ? "card-text-active" : "card-text"}>
        {data.name}
      </p>
      <img className="img-delete" src={trash} alt="excluir" onClick={() => deleteData(data.id)} />
    </div>
  );
}
