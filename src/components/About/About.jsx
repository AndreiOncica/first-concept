import React from "react";
import styled from "styled-components";
import AboutImg from "../../assets/AboutImg.jpg";
import { colors } from "../../GlobalStyles";

const AboutSection = styled.section`
  background: ${colors.black};
  display: grid;
  position: relative;
`;

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  height: 900px;
  max-width: 1920px;
  margin: 0px auto;

  & > .about__left--background {
    background-color: rgb(60, 68, 67);
    /* width: 100%; */
  }

  & > .about__img {
    background-image: url(${AboutImg});
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-color: rgb(60, 68, 67);
    background-blend-mode: lighten;
  }

  @media (min-width: 949px) {
    height: 700px;
    & > .about__img,
    & > .about__left--background {
      width: 50%;
    }
  }
`;

const AboutText = styled.div`
  position: absolute;
  top: 0px;
  margin: 0px auto;
  place-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-width: 1175px;

  & .about__text--container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    border: 3px solid rgb(244, 244, 244);
    padding: 2rem;
    background: rgba(60, 68, 67, 0.867);
    position: relative;
    color: rgb(244, 244, 244);
    font-weight: 200;
    width: 60%;

    & > div:first-child {
      width: fit-content;
      background: rgb(60, 68, 67);
      padding: 1rem 2rem;
      position: absolute;
      top: -30px;
      font-size: 1.25rem;
      font-weight: bold;
    }

    @media (max-width: 949px) {
      width: 100%;

      &.about__text--container {
        width: 100%;
        border: none !important;
        padding: 4rem;
        max-height: 100%;

        & > div:first-child {
          background: transparent;
          position: relative;
          padding: 0px;
          top: 0px;
        }
      }
    }
  }
`;

export default function About() {
  return (
    <AboutSection id="poveste">
      <AboutContainer>
        <div className="about__left--background"></div>
        <div className="about__img"></div>
      </AboutContainer>
      <AboutText>
        <div className="about__text--container">
          <div>DESIGN DIN SI CU PASIUNE</div>
          <div>
            Suntem o echipa de designeri de interior, peisagistica si urbanism
            motivati, in primul rand, de dezvoltarea unui produs final complet,
            fie ca e vorba de mobila sau amenajarea unui spatiu exterior, unic
            fiecarui utilizator in parte, determinat de personalitatea si
            nevoile acestuia. Suntem o echipa multidisciplinara cu
            background-uri variate, formata din oameni ce ataca o propunere pe
            toate laturile, dornici sa obtina potentialul maxim al fiecarui
            proiect. In egala masura, credem in nevoia de invatare continua si
            de adaptare la o lume in permanenta schimbare. Venim cu o experienta
            dobandita gradual in domeniul arhitecturii, urbanismului, dar in mod
            deosebit al proiectarii de mobila, in care ne-am implicat de la bun
            inceput in toate etapele, inclusiv in cele adiacente designului. Am
            vrut sa intelegem ce presupune atat domeniul vanzarilor in aceasta
            meserie, cat si industria de feronerie, de asemenea implicandu-ne
            manual in constructia mobilei. Un pricipiu de baza al filozofiei
            noastre este ca ne dorim sa cunoastem tot ceea ce constituie
            procesul de mobilare al unui spatiu. Astfel, va putem oferi un
            pachet de servicii complet, iar voi puteti lua o decizie informata
            catre un design ce va defineste.
          </div>
        </div>
      </AboutText>
    </AboutSection>
  );
}
