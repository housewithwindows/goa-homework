import { Route,Routes } from "react-router-dom"
// Files
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"
import Nav from "./nav"





const Home = () => {
    return(
        <>
    <Nav />
    <h1>Welcome to home page!</h1>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
    </Routes>
    </>
    )
}
export default Home