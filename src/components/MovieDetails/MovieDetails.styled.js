import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
max-width: 90%;
margin: 0 auto;
margin-top: 20px;
`

export const UpperWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export const LinkStyle = styled(NavLink)`
text-decoration: none;
&:hover,
&:focus {
-webkit-filter: drop-shadow(3px 5px 5px #000);
  filter: drop-shadow(3px 5px 5px #000);
  }
`