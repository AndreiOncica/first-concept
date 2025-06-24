import React from "react";
import { colors, Container } from "../../GlobalStyles";
import {Logo, Links, Line} from './Navbar.styles'

export default function Desktop({navLinks, commonContainerStyles, logoImg}) {
  return (
    <>
      <Line></Line>
      <Container
        display="grid"
        justify="space-around"
        style={commonContainerStyles}
      >
        <Links>
          {navLinks.slice(0, 2).map(({ href, label }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </Links>
        <Logo href="#home">
          <img src={logoImg} alt="Logo First Concept" />
        </Logo>
        <Links>
          {navLinks.slice(2).map(({ href, label }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </Links>
      </Container>
    </>
  );
}
