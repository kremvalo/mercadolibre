import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routing/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./core/redux/store";

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);
