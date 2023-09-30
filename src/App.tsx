import React, { useState } from "react";
import "./App.css";

import Search from "./components/Search";
import ListTechs from "./components/ListTechs";

function App() {
  const [listTecs, setListTecs] = useState([]);
  const searchTec = (value: string) => {
    return listTecs.filter((item: string) => item.includes(value));
  };
  return (
    <main>
      <h1 className="title">Minha lista de Tecnologias</h1>
      <Search callbackAddTec={setListTecs} callbackSearchTec={searchTec} />
      <ListTechs />
    </main>
  );
}

export default App;
