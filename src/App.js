import React, { useState, useEffect, useMemo } from "react"

function App() {
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar React Hooks"])
  const [input, setInput] = useState("")

  //Mount
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, [])


  //Update
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleAdd() {
    setTarefas([...tarefas, input])
    setInput("")
  }

  const totalTarefas = useMemo(() => tarefas.length, [tarefas])

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa + 1}>{tarefa}</li>
        ))}
      </ul>
      <br />
      <strong>Você tem {totalTarefas} tarefas!</strong>
      <br />
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
