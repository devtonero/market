import styled from "styled-components";
import { Container } from "../../globalstyles";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Navcontainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const Navlogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const Navicon = styled(FaMagento)`
  margin-left: 0.5rem;
`;
export const Micon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

export const Nmenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;
export const Nitems = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const Nlinks = styled(Link)`
  display: flex;
  color: #fff;
  height: 100%;
  text-decoration: none;
  align-items: center;
  padding: 0.5rem 1rem;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b49f7;
      transition: all 0.3s ease;
    }
  }
`;

export const Nibtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const Nbtnlink = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
  border: none;
`;
