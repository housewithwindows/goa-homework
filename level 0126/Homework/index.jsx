function App(){
const fruits = ["Apple", "Banana", "Cherry"];

function App() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
const isLoggedIn = true;

function App() {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome!</h1> : <h1>Please log in</h1>}
    </div>
  );
}
const imageProps = {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image"
  };
  const style = {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "10px",
    textAlign: "center"
  };
 return <div style={style}>Styled Div</div>;
 function renderMessage() {
    return <h2>Hello from a function!</h2>;
  }
   const name = "John";
   const age = 30;
   return <p>{`${name} is ${age} years old.`}</p>
   const Tag = "h1";
   return <Tag>Hello World!</Tag>
   const categories = [
    { name: "Fruits", items: ["Apple", "Banana"] },
    { name: "Vegetables", items: ["Carrot", "Broccoli"] }
  ];
  
  function Map() {
    return (
      <div>
        {categories.map((category, index) => (
          <div key={index}>
            <h3>{category.name}</h3>
            <ul>
              {category.items.map((item, subIndex) => (
                <li key={subIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
  ];
  
  function Table() {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
const greeting = "Hello";
const named = "Alice";
}
 

export default App;
