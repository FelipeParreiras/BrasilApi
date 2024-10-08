import React from "react";
import {
  ContentContainer,
  ImageContainer,
  LinksContainer,
  PageContainer,
  ProfileImage,
  SocialLink,
  TextContainer,
} from "./styles"; // Importa o estilo para a imagem

function LanginPage() {
  return (
    <PageContainer>
      <h1>Sobre Este Projeto</h1>
      <ContentContainer>
        <ImageContainer>
          <ProfileImage
            src="../../public/images/FotoDePerfil.jpg"
            alt="Foto de Perfil"
          />{" "}
          <LinksContainer>
            <SocialLink href="https://github.com/FelipeParreiras">
              GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/felipe-parreiras-6141241a2">
              LinkedIn
            </SocialLink>
          </LinksContainer>
        </ImageContainer>
        <TextContainer>
          <p>
            Este projeto foi desenvolvido por{" "}
            <strong>Felipe Luiz Parreiras Lima</strong> como parte de um estudo
            sobre as tecnologias <strong>Node-RED</strong>,{" "}
            <strong>React.js</strong> e a <strong>BrasilAPI</strong>. O objetivo
            é explorar a integração dessas ferramentas e criar funcionalidades
            que exemplifiquem seu uso em aplicações web.
          </p>
          <br />
          <p>O projeto implementa duas principais funcionalidades:</p>
          <br />
          <ul>
            <li>
              <strong>Broker Catalog</strong>: uma listagem de corretoras
              brasileiras, exibindo o nome, estado e CNPJ de cada corretora no
              seguinte formato: <em>Nome da Corretora - Estado / CNPJ</em>.
            </li>
            <br />
            <li>
              <strong>Zip Code Searcher</strong>: uma ferramenta de busca que,
              ao inserir um código postal, exibe as informações correspondentes,
              como CEP, estado, cidade, bairro e logradouro.
            </li>
          </ul>
        </TextContainer>
      </ContentContainer>
    </PageContainer>
  );
}

export default LanginPage;
