import React from "react";
import { ContentWrapper } from "./content.styled";
import { ContentProps } from "./content.types";

export const Content = ({ children, withBackground }: ContentProps) => (
  <ContentWrapper $withBackground={withBackground}>{children}</ContentWrapper>
);
