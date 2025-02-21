import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/Normalice.css";
import "../src/assets/styles.css";
import App from "./App.tsx";
import GeneralContainerComponent from "./components/GeneralContainer.tsx";
import Header from "./components/Header.tsx";
import CharacterId from "./pages/CharacterId.tsx";
import Favorites from "./pages/Favorites.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import RQProvider from "./services/queryClient.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <RQProvider>
          <GeneralContainerComponent>
            <Header />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/character/:id" element={<CharacterId />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </GeneralContainerComponent>
        </RQProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
