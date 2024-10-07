import styled from 'styled-components'

export const Lister = styled.div `
  width: 60%;
  height: 45ch;
  overflow-y: scroll; // Permite a rolagem no eixo Y
  padding: 10px;
  border: 1px solid #ccc; // Um exemplo de borda para o visual
  background-color: #f9f9f9; // Cor de fundo
  border-radius: 3ch;
  border-top-left-radius:0ch; // Bordas arredondadas para um visual mais suave

  // Estilização para a barra de rolagem
  ::-webkit-scrollbar {
    width: 8px; // Largura da barra de rolagem
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; // Cor do fundo da barra
  }

  ::-webkit-scrollbar-thumb {
    background: #888; // Cor da barra
    border-radius: 8px; // Deixa a barra de rolagem com bordas arredondadas
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; // Cor da barra ao passar o mouse
  }
`