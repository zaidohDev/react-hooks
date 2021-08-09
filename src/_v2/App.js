import  { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import './App.css'

function App() {

  const [todoInput, setTodoInput] = useState('')

  function addTodo(){
    
  }
  return (
    <div className="App" 
      style={{
        display:"flex", 
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center"
      }} 
    >
      <h1>Quais são as tarefas de hoje?</h1>
      <TextField 
        id="standard-basic" 
        label="Informe uma tarefa..."
        value={todoInput}
        onChange={e => {setTodoInput(e.target.value)}}
        style={{maxWidth:"300px", width:"90vw"}} />
    </div>
  )
}

export default App