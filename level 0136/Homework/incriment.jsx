import {useState} from 'react'

export default function Incriment(){
    const [count,setCount] = useState(0);

    const incriment = () => {
        setCount(count + 1)
    }

    return(
        <>
        <button onClick={incriment}>0</button>
        <p>0</p>
        </>
    )
}