import styled from "styled-components";
import { colors, Container } from "../../GlobalStyles";

export const MainSection = styled.section`
  /* height: calc(100dvh - 191px); */
  background: ${colors.white};
`;

export const StyledContainer = styled(Container)`
  display: grid;
  gap: 2rem;
  position: relative;
  padding: 3rem 0;
  grid-template-areas: ${({ $ismobile }) =>
    $ismobile
      ? `"IMG" "BTNS"`
      : `". IMG IMG" ". IMG IMG" "BTNS IMG IMG"`};
            padding-bottom: 6rem;
`;

export const TextContainer = styled.div`
  position: absolute;
  width: calc(100% + 16px);
  display: grid;
  grid-template-columns: auto auto;
  background: ${colors.white};
  padding: 1rem 0;
  top: ${({ $$ismobile }) => ($$ismobile ? "19%" : "30%")};
  z-index: 1;
  transform: ${({ $animate }) =>
    $animate ? "translateX(0%)" : "translateX(-120%)"};
  transition: transform 1s ease-in-out;
`;


export const Title = styled.div`
  font-size: clamp(24px, 3.125vw, 56px);
`;

export const Subtitle = styled.div`
  align-self: center;
  font-size: clamp(18px, 2.125vw, 40px);
  color: ${colors.black};
`;

export const ButtonsWrapper = styled.div`
  grid-area: BTNS;
  display: flex;
  flex-direction: ${({ $ismobile }) => ($ismobile ? "row" : "column")};
  gap: 2rem;
  width: ${({ $ismobile }) => ($ismobile ? "100%" : "250px")};
  justify-content: space-between;
`;

export const StyledButton = styled.a`
  background: ${({ $main }) => ($main ? colors.black : "inherit")};
  color: ${({ $main }) => ($main ? colors.white : "inherit")};
  font-size: 1.25rem;
  font-weight: ${({ main }) => (main ? 600 : 200)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${colors.black};
  text-decoration: none;
`;

export const ImageStyled = styled.img`
  width: 100%;
  grid-area: IMG;
  box-shadow: 15px 15px 1px ${colors.accent};
  opacity: 0.9;
  transform: ${({ $animate }) => $animate ? "translateX(0%)" : "translateX(120%)"};
  transition: transform 1s ease-in-out;
`;
