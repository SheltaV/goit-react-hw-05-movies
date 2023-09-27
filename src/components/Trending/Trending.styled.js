import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled(NavLink)`
text-decoration: none;

&:hover,
&:focus {
-webkit-filter: drop-shadow(3px 5px 5px #000);
  filter: drop-shadow(3px 5px 5px #000);
  }
`;
