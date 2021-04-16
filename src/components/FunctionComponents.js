import React, { useState, useEffect } from 'react';

const FunctionComponents = () => {
  
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.title = count;
  }, [count])
  
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </>
  )

}

export default FunctionComponents;