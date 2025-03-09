import { useState } from "react"
function inputChanger() {
    const [input,setInput] = useState('')


    const handleChange = () => {
        setInput(e.target.input.value)
    }

    

    return(
        <>
        <div>
            <input type="text" onChange={handleChange}></input>
            <input type="text" onChange={handleChange}></input>
            <input type="text" onChange={handleChange}></input>
            <input type="text" onChange={handleChange}></input>
            <input type="text" onChange={handleChange}></input>
        </div>
        </>
    )
}