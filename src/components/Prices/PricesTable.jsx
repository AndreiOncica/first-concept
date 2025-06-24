import React from "react";

import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  font-family: inherit;
  font-size: 0.75rem;
  color: #333;

  th,
  td {
    padding: 0.25rem 1rem;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  th {
    background-color: #f8f8f8;
    font-weight: 600;
  }

  tbody tr:hover {
    background-color: #f0f0f0;
  }
`;

export const SpecialMentions = styled.div`
  margin-top: 2rem;
  font-size: 0.75rem;
  color: #444;

  p {
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  p:first-child {
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export default function PricesTable() {
  return (
    <>
      <h2>Preturi</h2>
      <div className="modal-content">
        <StyledTable>
          <thead>
            <tr>
              <th>Serviciu</th>
              <th>Pret</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INCAPERE</td>
              <td>600 EURO</td>
            </tr>
            <tr>
              <td>GARSONIERA/STUDIO</td>
              <td>750 EURO</td>
            </tr>
            <tr>
              <td>APARTAMENT 2 CAMERE</td>
              <td>900 EURO</td>
            </tr>
            <tr>
              <td>APARTAMENT 3 CAMERE</td>
              <td>1000 EURO</td>
            </tr>
            <tr>
              <td>APARTAMENT 4 CAMERE</td>
              <td>1350 EURO</td>
            </tr>
            <tr>
              <td>CASA PARTER</td>
              <td>2000 EURO</td>
            </tr>
            <tr>
              <td>CASA PARTER + ETAJ</td>
              <td>2200 EURO</td>
            </tr>
            <tr>
              <td>CASA PARTER + ETAJ + MANSARDA</td>
              <td>2500 EURO</td>
            </tr>
            <tr>
              <td>FATADA CASA</td>
              <td>100 EURO/FATADA</td>
            </tr>
            <tr>
              <td>RANDARI</td>
              <td>60 EURO/RANDARE</td>
            </tr>
            <tr>
              <td>
                PLANURI TEHNICE P.T.H. (RELEVEU, SANITARE, PRIZE, ELECTRICE)
              </td>
              <td>100 EURO</td>
            </tr>
            <tr>
              <td>AMENAJARE CURTE</td>
              <td>4 EURO/MP</td>
            </tr>
            <tr>
              <td>
                PLANURI TEHNICE AMENAJARE CURTE (PLANTARE, ILUMINAT,
                CONSTRUCTII)
              </td>
              <td>900 EURO</td>
            </tr>
            <tr>
              <td>DEPLASARE LA LOCATIE (in afara BUCURESTI-ILFOV)</td>
              <td>1 EURO/KM</td>
            </tr>
          </tbody>
        </StyledTable>
        <SpecialMentions>
          <p>PRETURILE DE BAZA PENTRU APARTAMENTE SI CASE INCLUD:</p>
          <p>- O VIZITA LOCATIE;</p>
          <p>- PROIECT AMENAJARE 3D;</p>
          <p>- 2 MODIFICARI;</p>
          <p>
            - PREDARE - DEVIZ ACHIZITII, PREZENTARE GENERALA EXPLICATIVA SI
            PREZENTARE TIP FILMULET, FISE TEHNICE MOBILIER COMANDA, IMAGINI
            GENERALE, IMAGINI PT MOBILA COMANDA SI CONFIGURATII IKEA UNDE ESTE
            NEVOIE SI ORICE ALTA FORMA DE CONFIGURATII MOBILIER;
          </p>
          <b>
            *Preturile se calculeaza in Lei la cursul BNR din ziua achizitiei.
          </b>
        </SpecialMentions>
      </div>
    </>
  );
}
