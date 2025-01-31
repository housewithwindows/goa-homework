import './bundle.css'



export default function App() {
    const styledBlue = {
        backgroundColor: "blue"
    }
return(
    
    <>
    <button style={styledBlue}>Hello</button>
    <button style={{backgroundColor: "red"}}>Hello</button>
    </>
)
}