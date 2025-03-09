const useToggle = (initialState=false) => {
    const [toggle,isToggled] = useState(initialState)

    const handleClick = () => {
        isToggled(!toggle)
    }

    return(
        <div style={{backgroundColor: toggle ? "red" : "black"}}>


            <button onClick={handleClick}>click to toggle</button>
            
        </div>
    )
}
export default useToggle