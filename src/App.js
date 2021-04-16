  import React from 'react'
  
  import ClassComponents from './components/ClassComponents'
  import FunctionComponents from './components/FunctionComponents'


  function App(){
    return(
      <div>
      <h2>ClassComponent</h2>
        <ClassComponents />
        <h2>FunctionComponents</h2>
        <FunctionComponents />
      </div>
    )
  }

  export default App

