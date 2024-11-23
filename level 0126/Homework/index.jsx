// **1. Rendering a List**
const items = ["Apple", "Banana", "Cherry"];
function RenderList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// **2. Conditional Rendering**
const isLoggedIn = false;
function ConditionalRendering() {
  return (
    <div>{isLoggedIn ? <h1>Welcome</h1> : <h1>Please log in</h1>}</div>
  );
}

// **3. Dynamic Attributes**
const imageProps = {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder Image",
};
function DynamicAttributes() {
  return <img src={imageProps.src} alt={imageProps.alt} />;
}

// **4. Inline Styles**
const bgColor = "lightblue";
const styleObject = {
  backgroundColor: bgColor,
  padding: "20px",
  textAlign: "center",
};
function InlineStyles() {
  return <div style={styleObject}>Styled Div</div>;
}

// **5. Rendering JSX from a Function**
function getGreeting() {
  return <h1>Hello from the function!</h1>;
}
function RenderJSXFunction() {
  return <div>{getGreeting()}</div>;
}

// **6. Template Strings in JSX**
const name = "John";
const age = 30;
function TemplateStrings() {
  return <p>{`${name} is ${age} years old.`}</p>;
}

// **7. Dynamic HTML Tag Rendering**
const DynamicTag = "h1";
function DynamicHTMLTag() {
  return <DynamicTag>This is dynamic!</DynamicTag>;
}

// **8. Nested Map Rendering**
const categories = [
  {
    category: "Fruits",
    items: ["Apple", "Banana", "Cherry"],
  },
  {
    category: "Vegetables",
    items: ["Carrot", "Peas", "Broccoli"],
  },
];
function NestedMapRendering() {
  return (
    <div>
      {categories.map((cat, index) => (
        <div key={index}>
          <h3>{cat.category}</h3>
          <ul>
            {cat.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// **9. Rendering a Table**
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
function RenderTable() {
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

// **10. String Interpolation**
const greeting = "Hello";
const userName = "Alice";
function StringInterpolation() {
  return <h1>{`${greeting}, ${userName}!`}</h1>;
}

// Example of rendering all components
function App() {
  return (
    <div>
      <RenderList />
      <ConditionalRendering />
      <DynamicAttributes />
      <InlineStyles />
      <RenderJSXFunction />
      <TemplateStrings />
      <DynamicHTMLTag />
      <NestedMapRendering />
      <RenderTable />
      <StringInterpolation />
    </div>
  );
}

export default App;
