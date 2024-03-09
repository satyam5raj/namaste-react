import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const data = [
    {
      name: "Satyam",
    },
    {
      name: "Ankur",
    },
    {
      name: "Divyam",
    },
  ];

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="App">
      <input placeholder="Search here" value={value} onChange={handleChange} />
      <ul>
        {filteredData.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}