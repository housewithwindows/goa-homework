

 const Child = (error) => {
    if(error){
        throw new Error("Why error?")
    }

    <p>this is child component</p>

}
export default Child