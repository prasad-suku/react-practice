import React, { useState } from "react";

const App = () => {
  const [input, setinput] = useState({
    name: "",
    email: "@gmail.com",
    phone: "+91",
    message: "",
    checkbox: "false",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    alert("submited");
    console.log(input);
  };

  const handleChange = (e) => {
    setinput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <h2>Form Handling</h2>
      <form onSubmit={(e) => handlesubmit(e)}>
        name :{" "}
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <br />
        Email :{" "}
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <br />
        phone :{" "}
        <input
          type="text"
          name="phone"
          value={input.phone}
          onChange={handleChange}
        />
        <br />
        message :{" "}
        <textarea
          type="text"
          name="message"
          value={input.message}
          onChange={handleChange}
        />
        <br />c lang{" "}
        <input
          type="checkbox"
          name="checkbox"
          onChange={handleChange}
          defaultChecked={true}
        />
        c++ lang{" "}
        <input type="checkbox" name="checkbox" defaultChecked={false} />
        java lang{" "}
        <input type="checkbox" name="checkbox" defaultChecked={true} />
        <br />
        radio option
        <label htmlFor="option1">
          option1{" "}
          <input
            type="radio"
            name="radio"
            onChange={handleChange}
            defaultChecked={true}
          />
        </label>
        <br />
        <label htmlFor="option1">
          option1{" "}
          <input
            type="radio"
            name="radio"
            value="option 1"
            onChange={handleChange}
            defaultChecked={false}
          />
        </label>
        <br />
        <label htmlFor="option1">
          option1{" "}
          <input
            type="radio"
            value="option 2"
            name="radio"
            onChange={handleChange}
            defaultChecked={false}
          />
        </label>
        <br />
        <label htmlFor="options">
          Select options
          <select name="selected option" id="" onChange={handleChange}>
            <option value="select"> default</option>
            <option value="mango"> mango</option>
            <option value="orange"> orange</option>
            <option value="grapes"> grapes</option>
          </select>
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default App;
