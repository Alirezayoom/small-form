import { useState, useRef } from "react";

import Button from "./Button";
import Error from "./Error";

const Form = ({ onAdd }) => {
  const [error, setError] = useState();

  const nameRef = useRef();
  const ageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({ title: "Error", message: "Empty" });
      return;
    }
    if (+age < 1) {
      setError({ title: "Error", message: "Invalid age" });
      return;
    }
    onAdd(name, age);
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <h1>My Friends</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageRef} />
        </div>

        <Button bg="#444" name="Add" padding="5px 20px" />
      </form>
    </div>
  );
};

export default Form;
