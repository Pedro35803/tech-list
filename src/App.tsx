import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";

import InputAdd from "./components/InputAdd";
import ListTechs from "./components/ListTechs";

import { TecsType } from "./types/commom";

function App() {
  const valueInitStorage = localStorage.getItem("tecs");
  const valueInit = valueInitStorage ? JSON.parse(valueInitStorage) : [];
  const [listTecs, setListTecs] = useState<TecsType[]>(valueInit);

  const filterId = (id: string) => listTecs.filter((obj) => obj.id != id);

  const string = JSON.stringify(listTecs);
  localStorage.setItem("tecs", string);

  const numTecs = listTecs.length;
  const numTecsComplete = listTecs.filter((obj) => obj.complete).length;

  const addItemInList = (value: string) => {
    const obj = { id: uuidv4(), name: value, complete: false };
    setListTecs([...listTecs, obj]);
  };

  const updateTec = (data: TecsType) => {
    const listFilter = filterId(data.id);
    setListTecs([...listFilter, data]);
  };

  const deleteTec = (id: string) => {
    const listFilter = filterId(id);
    setListTecs(listFilter);
  };

  return (
    <main>
      <header className="header">
        <div className="container">
          <h1 className="title">Minha lista de Tecnologias</h1>
          <InputAdd callbackAddTec={addItemInList} />
        </div>
      </header>
      <div className="container">
        <ListTechs
          list={listTecs}
          tecsTotal={numTecs}
          tecsComplete={numTecsComplete}
          callbackUpdateTec={updateTec}
          callbackDeleteTec={deleteTec}
        />
      </div>
    </main>
  );
}

export default App;
