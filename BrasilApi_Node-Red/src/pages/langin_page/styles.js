import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding:10vh;
  background-color: #f9f9f9;
  min-height: 90vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  padding: 10px;
  border: 1px solid #444;
  background-color: #333;
  border-radius: 3ch;
  min-height: 50vh;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
  min-height: 50vh;
  padding: 8vh;
  border-radius: 3ch;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 4vh;
  border: 1px solid #f9f9f9;
  background-color: #333;
  border-radius: 3ch;
`;

export const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  margin-right:2vh;
  margin-left:2vh;

  &:hover {
    color: #ddd;  // Muda a cor ao passar o mouse
  }

  &:active {
    color: #bbb;  // Muda a cor ao clicar
  }
`;

export const ProfileImage = styled.img`
  width: 150px;  // Largura da imagem
  height: 150px;  // Altura da imagem
  border-radius: 50%;  // Bordas arredondadas para fazer a imagem ficar circular
  margin-bottom: 20px;  // Espaçamento abaixo da imagem
  object-fit: cover;  // Garante que a imagem mantenha a proporção correta
  border: 2px solid #f9f9f9;  // Adiciona uma borda ao redor da imagem (opcional)
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  max-width:60vh;
  min-height: 50vh;
  padding: 6vh;
  border-radius: 3ch;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
`;

export const FeatureList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  text-align: justify;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 10px;
  text-align: justify;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
`;
