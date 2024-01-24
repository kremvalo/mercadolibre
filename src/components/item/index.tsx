import React from "react";
import {
  InfoContainer,
  ItemWrapper,
  Title,
  Price,
  StoreName,
} from "./item.styled";

import { ItemProps } from "./item.types";
import { StyledImage } from "../common/common.styled";

export const ItemForList = ({ item }: ItemProps) => (
  <ItemWrapper>
    <StyledImage
      $imageurl={item?.thumbnail ?? ''}
      width={'10rem'}
      height={'10rem'}
    />
    <InfoContainer>
      <Price>${new Intl.NumberFormat().format(parseInt(item?.price.toFixed(0)))}</Price>
      <Title>{item?.title}</Title>
    </InfoContainer>
    <StoreName>{item?.officialStoreName?.toLowerCase()}</StoreName>
  </ItemWrapper>
);
