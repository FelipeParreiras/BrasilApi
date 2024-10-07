import { Button } from "../../components/Button/styles";
import { Input } from "../../components/Input/styles";
import { Title } from "./styles";

import axios from "axios";
import React from "react";

const baseURL = "http://localhost:1880/getcep";

function Searcher() {
  const [cepData, setCepData] = React.useState(null);
  const [inputCep, setInputCep] = React.useState("");

  const handleGetCep = () => {
    if (inputCep) {
      axios
        .get(`${baseURL}/${inputCep}`)
        .then((response) => {
          setCepData(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar o CEP", error);
        });
    } else {
      alert("Por favor, insira um CEP válido.");
    }
  };

  return (
    <div>
      <Title>Zip Code Searcher</Title>

      <Input
        type="text"
        placeholder="Digite o CEP"
        value={inputCep}
        onChange={(e) => setInputCep(e.target.value)}
      />

      <Button onClick={handleGetCep}>Search Zip Code</Button>

      {cepData && (
        <div>
          <p>
            <strong>CEP:</strong> {cepData.cep}
          </p>
          <p>
            <strong>Estado:</strong> {cepData.state}
          </p>
          <p>
            <strong>Cidade:</strong> {cepData.city}
          </p>
          <p>
            <strong>Bairro:</strong> {cepData.neighborhood}
          </p>
          <p>
            <strong>Logradouro:</strong> {cepData.street}
          </p>
        </div>
      )}
    </div>
  );
}

export default Searcher;
