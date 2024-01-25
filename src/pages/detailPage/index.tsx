import React, { useEffect } from "react";

import { Content, Header } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../core/redux/store";
import { getItemAsync } from "./slice";
import { useParams } from "react-router-dom";
import { ButtonCustom, StyledImage } from "../../components/common/common.styled";
import { Description, InfoContainer, LeftContainer, Price, RightContainer, StateAndQuantity, Title, TitleDescription } from "./detailPage.styled";
import { Item } from "../../core/services/types/item.types";
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
                $imageurl={itemFormated.picture}
                width={'35rem'}
                height={'35rem'}
              />
              <TitleDescription>Descripción del producto</TitleDescription>
              <Description>{itemFormated?.description ?? ''}</Description>
            </LeftContainer>
            <RightContainer>
              <StateAndQuantity>{`${itemFormated.condition} - ${itemFormated.soldQuantity} vendidos`}</StateAndQuantity>
              <Title>{itemFormated.title ?? 'Sin descripción'}</Title>
              <Price>${new Intl.NumberFormat().format(parseInt(itemFormated?.price.amount.toFixed(0)))}</Price>

              <ButtonCustom>Comprar</ButtonCustom>
            </RightContainer>
          </InfoContainer>
        </Content>
        :
        <Loader />
      }
    </div >

  )
};
