import styled from "styled-components";

export const Card = styled.div`
  width: 189.5px;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  position: relative;
  background-color: #000000;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: #ffffff;
    bottom: -10px;
    right: -10px;
    z-index: 10;
    transform: rotate(45deg);
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 245px;
`;

export const CardRectangle = styled.div`
  background-color: #ec1d24;
  height: 5.38px;
  width: 100%;
`;

export const CardBottom = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  color: #ffffff;
  overflow: hidden;
  max-width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const FavoriteContainer = styled.span`
  transition: all 0.3s;
  cursor: pointer;
`;
