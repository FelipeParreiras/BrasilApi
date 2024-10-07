import { Button } from "../../components/Button/styles";
import { Input } from "../../components/Input/styles";
import { Lister } from "../../components/Lister/styles";
import { Title } from "./styles";

import axios from "axios";
import React from "react";

const baseURL = "http://localhost:1880/getcorretoras";

function BrokerCatalog() {
  const [corretoras, setCorretoras] = React.useState([]);

  const handleGetCorretoras = () => {
    axios.get(baseURL).then((response) => {
      setCorretoras(response.data);
    });
  };

  return (
    <div>
      <Title>Broker Catalog</Title>
      {/* <Input
        type="text"
        placeholder=""
        value={inputCep}
        onChange={(e) => setInputCep(e.target.value)}
      /> */}
      <Button onClick={handleGetCorretoras}>List The Broker Catalog</Button>

      {corretoras.length > 0 && (
        <Lister>
          {corretoras.map((corretora, index) => (
            <div key={index}>
              <p>{`${corretora.nome_comercial} - ${corretora.municipio} / ${corretora.cnpj}`}</p>
            </div>
          ))}
        </Lister>
      )}
    </div>
  );
}

export default BrokerCatalog;
