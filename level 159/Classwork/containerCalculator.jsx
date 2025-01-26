import { useState } from "react";
import { Presentational } from "./presentational.jsx"

function containerCalculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const handleClick = (e) => {
        e.preventDefault();
        setResult(Number(num1) + Number(num2));
    }

    return (
        <Presentational num1={num1} num2={num2} result={result} handleClick={handleClick} setNum1={setNum1} setNum2={setNum2}/>
    );
}

export default containerCalculator;

