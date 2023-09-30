import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
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
      <h1 className="title">Minha lista de Tecnologias</h1>
      <InputAdd callbackAddTec={addItemInList} />
      <ListTechs
        list={listTecs}
        callbackUpdateTec={updateTec}
        callbackDeleteTec={deleteTec}
      />
    </main>
  );
}

export default App;
