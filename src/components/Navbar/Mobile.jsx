import React, { useState, useRef } from "react";
import styled from "styled-components";
import { colors, Container } from "../../GlobalStyles";
import { Logo, Links, Line } from "./Navbar.styles";

const Hamburger = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-self: end;
  cursor: pointer;

  & div {
    width: 100%;
    height: 2px;
    background: ${colors.black};
  }
`;

export default function Desktop({ navLinks, commonContainerStyles, logoImg }) {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu((prevShow) => !prevShow);
  }

  const mobileContainerRef = useRef();
  return (
    <>
      <Container
        ref={mobileContainerRef}
        display="grid"
        justify="space-around"
        style={commonContainerStyles}
      >
        <Logo href="#home" style={{ justifySelf: "start" }}>
          <img
            style={{ width: "120px" }}
            src={logoImg}
            alt="Logo First Concept"
          />
        </Logo>
        <Hamburger onClick={toggleMenu}>
          <div
            style={{
              transform: `rotateZ(${showMenu ? "45deg" : "0deg"}) translate(${
                showMenu ? "5px" : "0px"
              }, ${showMenu ? "6px" : "0px"})`,
              transition: ".2s",
            }}
          ></div>
          <div style={{ opacity: showMenu ? 0 : 1, transition: ".2s" }}></div>
          <div
            style={{
              transform: `rotateZ(${showMenu ? "-45deg" : "0deg"}) translate(${
                showMenu ? "5px" : "0px"
              }, ${showMenu ? "-6px" : "0px"})`,
              transition: ".2s",
            }}
          ></div>
        </Hamburger>
        <Links
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            position: "absolute",
            top: showMenu ? "85px" : "-100%",
            right: 0,
            left: 0,
            margin: "0 auto",
            padding: "2rem",
            textAlign: "center",
            background: colors.white,
            transition: ".5s",
            zIndex: -1,
          }}
        >
          {navLinks.map(({ href, label }) => (
            <a key={label} href={href} onClick={toggleMenu}>
              {label}
            </a>
          ))}
        </Links>
      </Container>
    </>
  );
}
