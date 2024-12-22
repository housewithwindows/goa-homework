import { useEffect, useState } from "react";

export default function App() {
  
  const [ticking, setTicking] = useState(true),
          [count, setCount] = useState(0)
  

     
     useEffect(() => {
      const timer = setTimeout(() => ticking && setCount(count+1), 1e3)
      return () => clearTimeout(timer)
     }, [count, ticking])
     
     return (
      <div>
        <div>{count}</div>
        <button onClick={() => setTicking(false)}>pause</button>
        <button onClick={() => setTicking(true)}>resume</button>
      </div>

     )
    
    }
  
  

  
  






