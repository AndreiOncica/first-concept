import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { ContactForm } from "./Form";

const FooterSection = styled.section`
  & .footer__section--container {
    width: 80%;
    max-width: 1175px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;

    & a {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      color: inherit;
      max-width: 300px;
    }

    & form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & > div {
        display: flex;
        flex-direction: column;

        & label {
          font-family: inherit;
          font-size: 0.75rem;
          font-weight: 800;
        }

        & input,
        textarea {
          width: 250px;
          border-radius: 5px;
          border: 2px solid black;
        }

        &.form__bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          & .social__media--icons {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            & a svg {
              width: 35px;
              height: 35px;

              &:last-child {
                width: 30px;
                height: 30px;
              }
            }
          }
        }

        & button {
          background: rgb(60, 68, 67);
          color: rgb(244, 244, 244);
          cursor: pointer;
          padding: 0.5rem;
          font-size: 1rem;
          font-weight: 300;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <div className="footer__section--container">
        <div>
          <a href="tel:0740931969">
            <FontAwesomeIcon icon={faPhone} />
            0740931969
          </a>
          <a href="mailto:contact@firstconcept.ro">
            <FontAwesomeIcon icon={faEnvelope} />
            contact@firstconcept.ro
          </a>
        </div>
        <ContactForm />
      </div>
    </FooterSection>
  );
}
