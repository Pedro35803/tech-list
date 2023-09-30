import React from 'react';
import './App.css';

import Input from './components/Input';
import ListTechs from './components/ListTechs';

function App() {
  return (
    <main>
      <h1 className='title'>Minha lista de Tecnologias</h1>
      <Input />
      <ListTechs />
    </main>
  );
}

export default App;
