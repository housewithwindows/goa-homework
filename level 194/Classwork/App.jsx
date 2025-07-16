import Profile from "./components/Profile";
import { UserContext } from "./usercontext.jsx";

const App = () => {
  const user = {
    email: "example@gmail.com",
    fullname: "Luka",
  };

  return (
    <div className="container">
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
    </div>
  );
};

export default App;

