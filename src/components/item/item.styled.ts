import styled from "styled-components";
import { COLORS } from "../../core/colors";

export const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const InfoContainer = styled.div`
  margin-left: 20px;
  width: 60%;
  align-self: start;
`;

export const  Title = styled.p`
  font-size: 14px;
  font-family: 'Proxima Nova Condensed', sans-serif;
`;

export const  Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Proxima Nova Condensed', sans-serif;
`;

export const  StoreName = styled.p`
  font-size: 14px;
  font-family: 'Proxima Nova Condensed', sans-serif;
  color: ${COLORS.darkGrey}
`;