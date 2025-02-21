import styled from "styled-components";

export const SearchContainer = styled.div``;

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding-bottom: 4px;
  border-bottom: 2px solid #000000;
  height: 27px;
  margin: 48px 48px 8px;
`;

export const SearchIcon = styled.img`
  width: 13px;
  height: 13px;
`;

export const SearchInput = styled.input`
  margin-left: 8px;
  outline: none;
  border: none;
  color: #000000;
  font-size: 16px;
  background-color: transparent;
  width: 100%;

  &::placeholder {
    color: #aaaaaa;
  }
`;

export const SearchResults = styled.span`
  font-size: 12px;
  margin: 0 48px
`;
