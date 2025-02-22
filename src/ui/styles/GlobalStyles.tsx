import styled from "styled-components";

export const GeneralContainer = styled.main`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: silver #f3f3f3;

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: red;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  padding: 48px;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 30px;
`;

export const LoadingComicsContainer = styled.div`
  display: flex;
  padding: 40px 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
