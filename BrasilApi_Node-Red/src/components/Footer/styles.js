import styled from 'styled-components';

// Logo
export const Logo = styled.img`
  width: 100px;  // Define a largura da imagem
  margin-bottom: 10px;
`;

export const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CopyrightText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

export const SocialLinks = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: #ddd;  // Muda a cor ao passar o mouse
  }

  &:active {
    color: #bbb;  // Muda a cor ao clicar
  }
`;
