import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled(NavLink)`
text-decoration: none;

&:hover,
&:focus {
-webkit-filter: drop-shadow(1px 1px 5px #000);
  filter: drop-shadow(1px 1px 5px #000);
  }
`;

export const List = styled.ul`
display: flex;
justify-content: center;
width: 80%;
flex-wrap: wrap;
gap: 30px;
`

export const ListItem = styled.li`
width: 30%;

`