import styled from "styled-components";
import { COLORS } from "../../core/colors";

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.lightGrey};
  margin: 10px 0;
`;

interface ImageContainerProps {
  $imageurl: string;
  width: string;
  height: string;
}

export const StyledImage = styled.div<ImageContainerProps>`
  background-image: url(${(props) => props.$imageurl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
