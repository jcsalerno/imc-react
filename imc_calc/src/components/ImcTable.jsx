import Button from "./Button";
import "./ImcTable.css";

export default function ImcTable({ data }) {
  return (
    <div id="result-container">
      <p id="imc-number">Seu IMC:</p>
      <p id="imc-info">Situação atual:</p>
      <h3>Confira as classificações:</h3>
      <div id="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
        {data.map((item) => (
          <div className="table-data" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>
      <Button id="back-btn" text="Voltar" />
    </div>
  );
}
