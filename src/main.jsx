import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { getPagePath } from "./pages";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
const { pathname } = window.location;

if (root.dataset.page === getPagePath(pathname) && !pathname.endsWith(".html")) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
