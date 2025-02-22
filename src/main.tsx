import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/ui/styles/GlobalStyles.tsx";
import "../src/ui/styles/Normalice.css";
import "../src/ui/styles/styles.css";
import RQProvider from "./application/services/queryClient.tsx";
import GeneralContainerComponent from "./ui/layouts/ContainerComponent/index.tsx";
import CharacterDetails from "./pages/CharacterDetails.tsx";
import Characters from "./pages/Characters.tsx";
import Favorites from "./pages/Favorites.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import Header from "./ui/organisms/Header/index.tsx";
import ErrorBoundary from "./ui/layouts/ErrorBoundary/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <RQProvider>
          <GeneralContainerComponent>
            <Header />
            <Routes>
              <Route path="/" element={<Characters />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/character/:id" element={<CharacterDetails />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </GeneralContainerComponent>
        </RQProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
