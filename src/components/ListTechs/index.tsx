import Card from "../Card";
import MetricsData from "../MetricsData";

import { TecsType } from "../../types/commom";
import { PropsType } from "./props";
import "./style.css";

export default function ListTechs({
  list,
  tecsTotal,
  tecsComplete,
  callbackUpdateTec,
  callbackDeleteTec,
}: PropsType) {
  const hasListContent = list.length !== 0;

  const textTecsComplete = () => {
    return tecsTotal === 0 ? "0" : `${tecsComplete} de ${tecsTotal}`;
  }

  return (
    <div className="section-listTecs">
      <div className="section-listTecs-metrics">
        <MetricsData
          text="Tecnologias criadas"
          color="primary"
          textNumber={String(tecsTotal)}
          key={1}
        />
        <MetricsData
          text="Concluídas"
          color="secondary"
          textNumber={textTecsComplete()}
          key={2}
        />
      </div>
      <div
        className={
          hasListContent ? "section-listTecs-items" : "section-listTecs-void"
        }
      >
        {hasListContent ? (
          list
            .sort((obj: TecsType) => (obj.complete ? 1 : -1))
            .map((obj: TecsType) => (
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
