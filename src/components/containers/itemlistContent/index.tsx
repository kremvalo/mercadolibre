import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ListWrapper, ItemWrapper } from "./itemlistContent.styled";
import { Divider } from "../../common/common.styled";

import { ListItem } from "../../item";

import { Content } from "../content";

import { AppDispatch } from "../../../core/redux/store";
import { getItemsAsync } from "./slice";
import { routes } from "../../../routing/routes.schema";
import Loader from "../../common/loader";

export const ItemlistContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { items } = useSelector(
    (state: any) => state.itemsState,
  );

  const [searchParams] = useSearchParams();
  const query: string = searchParams.get("query") ?? '';

  useEffect(() => {
    dispatch(getItemsAsync(query));
  }, [searchParams]);

  return (
    <div>
      <Content withBackground={items != null && items?.length > 0}>
        <ListWrapper>
          {
            items
              ? items.map((item: any) => {
                return (
                  <ItemWrapper
                    key={item.id}
                    onClick={() => navigate(`${routes.ITEMS}/${item.id}`)}
                  >
                    <ListItem item={item} />
                    <Divider />
                  </ItemWrapper>
                )
              })
              : <Loader />
          }
        </ListWrapper>
      </Content>
    </div>

  )
};
