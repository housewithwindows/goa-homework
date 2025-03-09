import { Child, createContext } from "react"

const myContext = createContext()
const secondContext = createContext()

return(
    <myContext.Provider value={"luka"}>
        <secondContext.Provider value={"hello"}>
        



        </secondContext.Provider>
    </myContext.Provider>
)