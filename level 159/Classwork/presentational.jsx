export default function Presentational(num1,num2,setNum1,setNum2,result,handleClick) {
return (
    <>
        <div>
            <input 
                type="number"
                value={num1} 
                onChange={(e) => setNum1(e.target.value)}
            />
            <input 
                type="number"
                value={num2} 
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={handleClick}>+</button>
        </div>
        <div>
            Result: {result}
        </div>
    </>
);
}