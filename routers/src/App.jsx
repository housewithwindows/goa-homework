import { Routes } from "react-router"



function App() {
  return(
    <>
    <Routes path="/login" element={<Login />} />
    <Routes path="/auth" element={<Auth />}/>
    </>
  )
}

export default App
