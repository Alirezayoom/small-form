import { useState } from "react";

import Data from "./components/Data";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);

  const addHandler = (name, age) => {
    const id = (Math.random() * 99999).toFixed(0);
    setData((prev) => {
      return [{ id, name, age }, ...prev];
    });
  };

  const list =
    data === undefined || data.length === 0 ? (
      <div style={{ textAlign: "center", margin: "1rem 0" }}>No Data</div>
    ) : (
      <Data data={data} />
    );

  return (
    <div>
      <Form onAdd={addHandler} />
      {list}
    </div>
  );
}

export default App;
