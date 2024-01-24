import { styled } from "styled-components";
import { COLORS } from "../../../core/colors";

interface ContainerProps {
  $withBackground?: boolean;
}

export const ContentWrapper = styled.div<ContainerProps>`
  max-width: 57rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$withBackground ? COLORS.white : 'transparent'}
`;
