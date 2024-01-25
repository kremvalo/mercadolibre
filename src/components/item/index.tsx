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
      $imageurl={item?.picture ?? ''}
      width={'10rem'}
      height={'10rem'}
    />
    <InfoContainer>
      <Price>${new Intl.NumberFormat().format(item?.price.amount)}</Price>
      <Title>{item?.title}</Title>
    </InfoContainer>
    <StoreName>{item?.seller?.toLowerCase()}</StoreName>
  </ItemWrapper>
);
