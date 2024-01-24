import React from "react";

import { Route, Routes } from "react-router-dom";
import { routes } from "./routes.schema";

import { InitialPage, DetailPage } from "../pages";

export const AppRoutes = () => (
  <Routes>
    <Route index path={routes.BASE_NAME} element={<InitialPage />} />
    <Route path={routes.ITEMS} element={<InitialPage />} />
    <Route path={routes.ITEMS_DETAIL} element={<DetailPage />} />
  </Routes >
);
