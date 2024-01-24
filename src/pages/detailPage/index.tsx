import React, { useEffect } from "react";

import { Content, Header } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../core/redux/store";
import { getItemAsync } from "./slice";
import { useParams } from "react-router-dom";
import { StyledImage } from "../../components/common/common.styled";
import { Description, InfoContainer, LeftContainer, Price, RightContainer, StateAndQuantity, Title, TitleDescription } from "./detailPage.styled";
import { Item } from "../../core/services/types";
import Loader from "../../components/common/loader";

export const DetailPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { idItem } = useParams();

  const { itemSelected } = useSelector(
    (state: any) => state.itemSelectedState,
  );

  const itemFormated: Item = itemSelected;

  useEffect(() => {
    dispatch(getItemAsync(idItem ?? ''));
  }, [dispatch]);

  return (
    <div>
      <Header />
      {itemSelected ?
        <Content withBackground={true}>
          <InfoContainer>
            <LeftContainer>
              <StyledImage
                $imageurl={itemFormated.pictures[0].url}
                width={'35rem'}
                height={'35rem'}
              />
              <TitleDescription>Descripción del producto</TitleDescription>
              <Description>{itemFormated?.description ?? ''}</Description>
            </LeftContainer>
            <RightContainer>
              <StateAndQuantity>{`${itemFormated.condition} - ${itemFormated.initialQuantity}`}</StateAndQuantity>
              <Title>{itemFormated.title ?? 'Sin descripción'}</Title>
              <Price>$73.773</Price>
            </RightContainer>
          </InfoContainer>
        </Content>
        :
        <Loader />
      }
    </div >

  )
};