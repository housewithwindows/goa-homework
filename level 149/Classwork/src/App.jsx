import { useState } from "react";

const Register = () => {
  const [formState, setFormState] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const handleReset = () => {
    setFormState({});
  };

  console.log(formState);

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={formState.email || ""}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          onChange={handleChange}
          value={formState.firstname || ""}
          type="text"
          name="firstname"
          placeholder="Fistname"
          required
        />
        <input
          onChange={handleChange}
          value={formState.lastname || ""}
          type="text"
          name="lastname"
          placeholder="Lastname"
          required
        />
        <button>Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <p>Email: {formState.email}</p>
      <p>Firstname: {formState.firstname}</p>
      <p>Lastname: {formState.lastname}</p>
    </div>
  );
};

export default Register;
