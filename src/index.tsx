import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const app = <App />;
const appDiv = document.getElementById("app");

appDiv
  ? createRoot(appDiv).render(app)
  : console.error('Element with id "root" not found in the document.');
