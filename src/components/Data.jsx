import Button from "./Button";

const Data = ({ data }) => {
  return (
    <div style={{ display: "grid", gap: "10px", margin: "2rem 0" }}>
      {data.map((data) => (
        <div
          style={{
            backgroundColor: "#222",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
          key={data.id}
        >
          <div>
            {data.name} is {data.age} yo.
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button bg="red" name="delete" />
            <Button bg="green" name="edit" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
