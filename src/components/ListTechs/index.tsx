import Card from "../Card";
import MetricsData from "../MetricsData";

import { TecsType } from "../../types/commom";
import { PropsType } from "./props";
import "./style.css";

export default function ListTechs({
  list,
  callbackUpdateTec,
  callbackDeleteTec,
}: PropsType) {
  const hasListContent = list.length !== 0;
  console.log(list.length)
  return (
    <div className="section-listTecs">
      <div className="section-listTecs-metrics">
        <MetricsData
          text="Tecnologias criadas"
          color="primary"
          textNumber={"0"}
          key={1}
        />
        <MetricsData
          text="Concluídas"
          color="secondary"
          textNumber={"0"}
          key={2}
        />
      </div>
      <div
        className={
          hasListContent ? "section-listTecs-items" : "section-listTecs-void"
        }
      >
        {hasListContent ? (
          list.map((obj: TecsType) => (
            <Card
              data={obj}
              updateData={callbackUpdateTec}
              deleteData={callbackDeleteTec}
            />
          ))
        ) : (
          <>
            <p className="text-bold">
              Você ainda não tem tecnologias cadastradas
            </p>
            <p>Crie tecnologia e organize seus itens a fazer</p>
          </>
        )}
      </div>
    </div>
  );
}
