import React from "react";
import { PageContainer, ProfileImage } from "./styles"; // Importa o estilo para a imagem

function LanginPage() {
  return (
    <PageContainer>
      <h1>Sobre Este Projeto</h1>
      <ProfileImage
        src="../../public/images/FotoDePerfil.jpg"
        alt="Foto de Perfil"
      />{" "}
      {/* Imagem com bordas arredondadas */}
      <p>
        Este projeto foi desenvolvido por{" "}
        <strong>Felipe Luiz Parreiras Lima</strong> como parte de um estudo
        sobre as tecnologias <strong>Node-RED</strong>,{" "}
        <strong>React.js</strong> e a <strong>BrasilAPI</strong>. O objetivo é
        explorar a integração dessas ferramentas e criar funcionalidades que
        exemplifiquem seu uso em aplicações web.
      </p>
      <p>O projeto implementa duas principais funcionalidades:</p>
      <ul>
        <li>
          <strong>Broker Catalog</strong>: uma listagem de corretoras
          brasileiras, exibindo o nome, estado e CNPJ de cada corretora no
          seguinte formato: <em>Nome da Corretora - Estado / CNPJ</em>.
        </li>
        <li>
          <strong>Zip Code Searcher</strong>: uma ferramenta de busca que, ao
          inserir um código postal, exibe as informações correspondentes, como
          CEP, estado, cidade, bairro e logradouro.
        </li>
      </ul>
    </PageContainer>
  );
}

export default LanginPage;
