import styled from "styled-components";
import { COLORS } from "../../core/colors";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5em;
`;

export const LeftContainer = styled.div`
  width: 70%;  
`

export const RightContainer = styled.div`
  width: 30%;  
`

export const  Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  font-family: 'Proxima Nova Condensed', sans-serif;
  line-height: 1em;
`;

export const  Price = styled.p`
  font-size: 2em;
  font-weight: 300;
  font-family: 'Proxima Nova Condensed', sans-serif;
  line-height: 0em;
`;

export const  StateAndQuantity = styled.p`
  font-size: .8em;
  font-family: 'Proxima Nova Condensed', sans-serif;
  line-height: 0px;
  color: ${COLORS.darkGrey}
`;

export const  TitleDescription = styled.h2`
  font-weight: 400;
  font-family: 'Proxima Nova Condensed', sans-serif;
`;

export const  Description = styled.p`
  font-size: .9em;
  font-family: 'Proxima Nova Condensed', sans-serif;
  color: ${COLORS.darkGrey}
`;