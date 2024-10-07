import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
`;

export const ProfileImage = styled.img`
  width: 150px;  // Largura da imagem
  height: 150px;  // Altura da imagem
  border-radius: 50%;  // Bordas arredondadas para fazer a imagem ficar circular
  margin-bottom: 20px;  // Espaçamento abaixo da imagem
  object-fit: cover;  // Garante que a imagem mantenha a proporção correta
  border: 2px solid #333;  // Adiciona uma borda ao redor da imagem (opcional)
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
`;

export const FeatureList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 10px;
  text-align: left;
`;
