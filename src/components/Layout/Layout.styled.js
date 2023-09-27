import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: #8776cc;
    font-weight: 700;
  }
`;

export const List = styled.ul`
    display: flex;
    gap: 8px;
`;

export const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    margin: 0 auto;
`