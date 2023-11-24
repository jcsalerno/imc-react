import { data } from "./data/data";

import { useState } from "react";

import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

import "./App.css";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    if (!weight || !height) return;

    setImc(imcResult);
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable />}
    </div>
  );
}

export default App;
