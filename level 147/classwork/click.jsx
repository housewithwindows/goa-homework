import { useState } from 'react'
const App = () => {
  const [count,setCount] = useState(0);

//const handleClick = () => {
//  setCount(count + 1)
//  setCount(count + 1) 

//}
const handleClickCorrect = () => {
   setCount(prevCount => prevCount + 1)
   setCount(prevCount => prevCount + 1)
}

return (
    <div>
    <p>Count is: {count}</p>
    <button onClick = {handleClickCorrect}>Increase</button>
    </div>
)
};
export default App