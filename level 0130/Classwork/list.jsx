const List = ({data}) => {
  
    return (
      <ul>
          {
            data.map((value, index) => {
              return (
                <li key={index}>{value}</li>
              )
            })
          }
        
      </ul>
    )
  }
  
  export default List;