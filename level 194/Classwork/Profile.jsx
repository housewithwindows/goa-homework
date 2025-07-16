import { useContext } from "react"
import { userContext } from "./usercontext.jsx"

const Profile = () => {

    const myContext = useContext(userContext)

    return(
        <>
        <p>{user.email}</p>
        <p>{user.fullname}</p>
        </>
    )
}
export default Profile