import React from "react";
import styled from "styled-components";
import furnitureImg from '../../assets/mobila.jpeg'
const FurnitureSection = styled.section`
  width: 100%;
  height: 870px;
  position: relative;

  & .furniture__background {
    background-image: url(${furnitureImg});
    background-color: rgb(60, 68, 67);
    background-blend-mode: hard-light;
    background-position: center center;
    background-size: cover;
    transform: scaleX(-1);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  }

  & .furniture__text {
    width: 80%;
    max-width: 1175px;
    height: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > div {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      text-align: left;
      gap: 2rem;
      padding: 3rem;
      background: rgba(60, 68, 67, 0.867);
      color: rgb(244, 244, 244);

      & .furniture__text--title {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 949px) {
    height: 600px;

    & .furniture__text {
      position: absolute;
      width: 100%;
      left: 0px;
      max-height: 100%;

      & > div {
        width: 100%;
      }
    }
  }
`;

export default function Furniture() {
  return (
    <FurnitureSection>
      <div className="furniture__background"></div>
      <div className="furniture__text">
        <div>
          <div className="furniture__text--title">MOBILA LA COMANDA</div>
          <div>
            Mobilierul facut la comanda este pentru oameni cu o imaginatie
            bogata care vor sa o transforme in realitate. De asemenea, aceasta
            reprezinta o optiune avantajoasa in contextul in care se doreste ca
            rezultatul final sa fie determinat aproape complet de spatiul
            incadrat, fara lufturi inestetice (spatii goale ramase intre perete
            si mobila), in acelasi timp mascand orice nu se doreste sa fie la
            vedere. Mobila pret-a-porter este alternativa ideala pentru
            persoanele practice care tind catre un echilibru metodic intre timp,
            functiune si estetica. Cel mai mare avantaj ce il constituie aceasta
            modalitate de echipare a spatiului consta in faptul ca poti
            vizualiza si testa materialele si finisajele pana la rezultatul
            dorit.
          </div>
        </div>
      </div>
    </FurnitureSection>
  );
}
