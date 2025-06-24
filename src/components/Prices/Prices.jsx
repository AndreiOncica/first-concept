import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PricesTable from "./PricesTable";

const PricesSection = styled.section`
  height: 400px;
  display: flex;
  align-items: center;

  & .prices__section--container {
    width: 80%;
    max-width: 1175px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    & .prices__title {
      font-size: 1.5rem;
      font-weight: 500;
    }

    & .prices__text {
      font-size: 1.25rem;
      font-weight: 300;
    }

    & a {
      height: 100%;
      background: rgb(60, 68, 67);
      color: rgb(244, 244, 244);
      font-size: 1.25rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgb(60, 68, 67);
      text-decoration: none;
      padding: 1rem;
      cursor: pointer;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6); /* semi-transparent black backdrop */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* ensure it's above everything else */
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  width: 90%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export default function Prices() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <PricesSection id="preturi">
      <div className="prices__section--container">
        <div className="prices__title">PRETURI</div>
        <div className="prices__text">
          Pentru ca la noi totul e transparent, am ales sa punem toate costurile
          fixe la vedere. Am decis sa lucram per proiect, asa ca nu conteaza
          cati metri patrati are locuinta ta, pretul difera doar in functie de
          cate camere ai.
        </div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        >
          Vezi preturile
        </a>
        {showModal && (
          <ModalOverlay>
            <ModalContent ref={modalRef}>
              <PricesTable />
            </ModalContent>
          </ModalOverlay>
        )}
      </div>
    </PricesSection>
  );
}
