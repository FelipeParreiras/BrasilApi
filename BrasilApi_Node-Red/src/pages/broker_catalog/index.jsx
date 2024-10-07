import { Button } from "../../components/Button/styles";
import { Input } from "../../components/Input/styles";
import { Lister } from "../../components/Lister/styles";
import { ListerLine } from "../../components/ListerLine/styles";
import { ListerMenu } from "../../components/ListerMenu/styles";

import { Select } from "../../components/Select/styles";
import { Title, PageContainer } from "./styles";

import axios from "axios";
import React from "react";

const baseURL = "http://localhost:1880/getcorretoras";

function BrokerCatalog() {
  const [corretoras, setCorretoras] = React.useState([]);
  const [inputValor, setInputValor] = React.useState("");
  const [selectedFilter, setSelectedFilter] = React.useState("nome");
  const [dataFetched, setDataFetched] = React.useState(false);

  const handleGetCorretoras = () => {
    axios.get(baseURL).then((response) => {
      setCorretoras(response.data);
      setDataFetched(true);
    });
  };

  const corretorasFiltradas = corretoras.filter((corretora) => {
    if (!inputValor) return true;

    const valor = inputValor.toLowerCase();

    if (selectedFilter === "nome") {
      return corretora.nome_comercial.toLowerCase().includes(valor);
    }
    if (selectedFilter === "municipio") {
      return corretora.municipio.toLowerCase().includes(valor);
    }
    if (selectedFilter === "cnpj") {
      return corretora.cnpj.includes(valor);
    }

    return false;
  });

  return (
    <PageContainer>
      <Title>Broker Catalog</Title>
      <ListerMenu>
        <Input
          type="text"
          placeholder="Digite o Valor"
          value={inputValor}
          onChange={(e) => setInputValor(e.target.value)}
        />
        <Select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="nome">Nome</option>
          <option value="municipio">Município</option>
          <option value="cnpj">CNPJ</option>
        </Select>
        <Button onClick={handleGetCorretoras}>List The Broker Catalog</Button>
      </ListerMenu>
      <Lister>
        {corretorasFiltradas.length > 0 ? (
          <div>
            {corretorasFiltradas.map((corretora, index) => (
              <ListerLine key={index}>
                <p>{`${corretora.nome_comercial} - ${corretora.municipio} / ${corretora.cnpj}`}</p>
              </ListerLine>
            ))}
          </div>
        ) : (
          dataFetched && <p>Nenhuma corretora encontrada.</p>
        )}
      </Lister>
    </PageContainer>
  );
}

export default BrokerCatalog;
