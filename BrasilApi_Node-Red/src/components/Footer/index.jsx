import React from "react";
import {
  FooterContainer,
  CopyrightText,
  SocialLinks,
  SocialLink,
  Logo,
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <CopyrightText>
        © 2024 Felipe Luiz Parreiras Lima. Todos os direitos reservados.
      </CopyrightText>
      <SocialLinks>
        <SocialLink href="https://github.com/FelipeParreiras">
          GitHub
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/felipe-parreiras-6141241a2">
          LinkedIn
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
