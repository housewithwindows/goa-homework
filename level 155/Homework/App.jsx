import { useState, useMemo } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const Memo = useMemo(() => count, [count]);

  const txt = 7;

  console.log(Memo);
  console.log(txt)

  return (
    <>
      <button>real incriment</button>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <p>{count}</p>
    </>
  );
}