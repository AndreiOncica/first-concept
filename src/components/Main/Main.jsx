import React, { useState, useEffect } from "react";
import {
  MainSection,
  StyledContainer,
  TextContainer,
  Title,
  Subtitle,
  ButtonsWrapper,
  ImageStyled,
  StyledButton,
} from "./Main.styles";
import MainImg from "../../assets/MainImg.jpeg";
import useismobile from "./useismobile";

const BUTTONS = [
  { text: "Afla mai multe", href: "#", primary: false },
  { text: "Cere oferta", href: "#", primary: true },
];

export default function Main() {
  const ismobile = useismobile();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const buttonStyle = {
    width: ismobile ? "45%" : "100%",
    padding: ismobile ? "1rem" : "2rem",
    fontSize: ismobile ? "1rem" : "1.25rem",
  };

  return (
    <MainSection>
      <StyledContainer $ismobile={ismobile}>
        <TextContainer $animate={animate} $ismobile={ismobile}>
          <Title>DESIGN PENTRU ORICINE</Title>
          <Subtitle>Let's design!</Subtitle>
        </TextContainer>

        <ButtonsWrapper $ismobile={ismobile}>
          {BUTTONS.map(({ text, href, primary }) => (
            <StyledButton
              key={text}
              href={href}
              $main={primary}
              style={buttonStyle}
            >
              {text}
            </StyledButton>
          ))}
        </ButtonsWrapper>

        <ImageStyled
          src={MainImg}
          alt="Main visual"
          $animate={animate}
        />
      </StyledContainer>
    </MainSection>
  );
}
