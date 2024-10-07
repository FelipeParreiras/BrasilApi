import styled from 'styled-components';

// Container principal que organiza o layout
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;  // Garante que o footer esteja sempre no final
`;

// Área de conteúdo principal
export const MainContent = styled.div`
  flex-grow: 1;  // Expande para ocupar o espaço restante entre Navbar e Footer
  padding: 20px;
  background-color: #f5f5f5;  // Cor de fundo suave
`;
