import React, { useMemo, useState } from "react";
import {
  Wrapper,
  MlIcon,
  SearchInput,
  SearchWrapper,
  SearchIconWrapper,
  SearchIcon,
} from "./header.styled";

import { Content } from "../containers/content";

import { useNavigate } from "react-router-dom";
import { routes } from "../../routing/routes.schema";

export const Header = () => {
  const mlIcon = useMemo(() => `https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.10/mercadolibre/logo_large_plus@2x.webp`, []);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate(`${routes.ITEMS}?query=${searchQuery}`)
  }

  return (
    <Wrapper>
      <Content>
        <MlIcon alt={'icon'} src={mlIcon} />
        <form onSubmit={handleSubmit}>
          <SearchWrapper>
            <SearchIconWrapper onClick={handleSubmit}>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchInput
              type="text"
              placeholder="Nunca dejes de buscar"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </SearchWrapper>
        </form>
      </Content>
    </Wrapper >
  );
};
