import { Link } from "react-router-dom";


const Nav = () => {

    return(
        <ul>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/">home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contacts">contacts</Link></li>
        </ul>
    )

}
export default Nav