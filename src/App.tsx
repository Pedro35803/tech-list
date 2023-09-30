import React, { useState } from "react";
import "./App.css";

import Search from "./components/Search";
import ListTechs from "./components/ListTechs";

import { TecsType } from "./types/commom";

function App() {
  const [listTecs, setListTecs] = useState<TecsType[]>([]);
  const searchTec = (value: string) => {
    return listTecs.filter(({ name }: TecsType) => name.includes(value));
  };
  return (
    <main>
      <h1 className="title">Minha lista de Tecnologias</h1>
      <Search callbackAddTec={setListTecs} callbackSearchTec={searchTec} />
      <ListTechs list={listTecs} />
    </main>
  );
}

export default App;
