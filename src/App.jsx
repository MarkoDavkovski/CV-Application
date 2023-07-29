import { useState } from "react";

import "./App.css";
import "./styles/input-section.css";
import GeneralInfo from "./components/GeneralInfo";
import DisplayCV from "./components/DisplayCV";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";

function App() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  console.log(formData);

  return (
    <>
      <section id="input-section">
        <GeneralInfo handleChange={handleChange} />
        <EducationalExp handleChange={handleChange} />
        <PracticalExp handleChange={handleChange} />
      </section>
      <DisplayCV formData={formData} />
    </>
  );
}

export default App;
