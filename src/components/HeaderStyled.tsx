import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #000000;
  position: sticky;
  z-index: 100;
  height: 90px;
  display: flex;
  padding: 16px 48px;
  align-items: center;
  border-bottom: 1px solid #333333;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
`;

export const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
`;

export const FavoritesContainer = styled.div`
  gap: 8px;
  padding: 8px;
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const NumberFavorites = styled.span`
  font-size: 20px;
`;