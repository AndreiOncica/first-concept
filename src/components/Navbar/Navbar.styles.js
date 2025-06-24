import styled from "styled-components";
import {colors} from '../../GlobalStyles'

export const navGap = '0rem';

export const Nav = styled.nav`
   display: flex;
   align-items: center; 
   gap: ${navGap};
`

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  & img {
    width: 270px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${navGap};
  & a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${colors.black};
  position: absolute;
  z-index: 10;
`;