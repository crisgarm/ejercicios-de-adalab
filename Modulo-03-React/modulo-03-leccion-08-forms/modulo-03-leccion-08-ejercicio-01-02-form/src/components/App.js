import React, { useState } from "react";
import "../stylesheets/App.css";
import Form from "./Form";

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lang, setLang] = useState("");

  const handleChange = (event) => {
    if (event.currentTarget.id === "name") {
      setName(event.currentTarget.value);
    } else if (event.currentTarget.id === "description") {
      setDescription(event.currentTarget.value);
    } else if (event.currentTarget.id === "lang") {
      setLang(event.currentTarget.value);
    }
  };
  return (
    <div className="App">
      <Form
        name={name}
        description={description}
        lang={lang}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;
