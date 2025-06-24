import React from "react";
import { colors, Container } from "../../GlobalStyles";
import LogoImg from "../../assets/Logo.png";
import { navGap, Nav, Logo, Links, Line } from "./Navbar.styles";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const navLinks = [
  { href: "#poveste", label: "POVESTE" },
  { href: "#proiecte", label: "PROIECTE" },
  { href: "#preturi", label: "PRETURI" },
  { href: "#contact", label: "CONTACT" },
];

const commonContainerStyles = {
  background: colors.white,
  gap: navGap,
  zIndex: "11",
  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
};

export default function Navbar({ isDesktop }) {
  return (
    <Nav style={{ backgroundColor: colors.white }}>
      {isDesktop ? (
        <Desktop
          navLinks={navLinks}
          commonContainerStyles={commonContainerStyles}
          logoImg={LogoImg}
        />
      ) : (
        <Mobile
          navLinks={navLinks}
          commonContainerStyles={commonContainerStyles}
          logoImg={LogoImg}
        />
      )}
    </Nav>
  );
}
