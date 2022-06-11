import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

function TodoApp(){
  const [listaTarefa, setListaTarefa] = useState([]);
  const [tarefa, setTarefa] = useState([]);

  //implementação do useEffect
  useEffect(()=> {
    document.title = `(${listaTarefa.length}) tarefas!`
  })
  //return statment
  return(
    <div>
      <h3>Tarefas</h3>
      <ul>
        {listaTarefa.map((item, index) => {
          return (
            <li key={item.id}>{item.titulo} <input type="checkbox" onChange={(event) => {
              setListaTarefa(listaTarefa.filter((e) => e.id !== item.id))
            }} /></li>
          )
        })}
      </ul>
    <form onSubmit={(event) => {
      event.preventDefault();
      const lista = listaTarefa
      lista.push({
        'id': Math.random().toString(),
        'titulo': tarefa
      })
      setListaTarefa(lista)
      setTarefa('')
    }}>
      <label htmlFor="new-todo">
        O que precisa ser feito?
      </label>
      <input 
      name="tarefa"
      onChange={(event) => setTarefa(event.target.value)}
      value={tarefa}
      />
      <button>
        Adicionar #{listaTarefa.length + 1}
      </button>
    </form>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);