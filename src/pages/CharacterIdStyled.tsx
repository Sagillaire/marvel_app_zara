import styled from "styled-components";
import { device } from "../utils/mediaQueries";

export const Container = styled.div`
  height: 100%;
`;

export const CharacterInfo = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  user-select: none;

  &::before {
    content: "";
    width: 40px;
    height: 40px;
    position: absolute;
    background-color: #ffffff;
    bottom: -20px;
    right: -20px;
    z-index: 10;
    transform: rotate(45deg);
  }

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const CharacterImage = styled.img`
  margin: 0;
  padding: 0;
  width: 35%;
  min-width: 35%;
  height: 280px;
  object-fit: fill;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const CharacterDetails = styled.div`
  height: 280px;
  background-color: #000000;
  padding: 48px;
  gap: 24px;
  width: 100%;
  @media ${device.tablet} {
    height: auto;
    padding: 0px 24px 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CharacterName = styled.h1`
  color: #ffffff;
`;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Description = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
`;

export const ComicsSection = styled.div`
  padding: 48px;
`;

export const SectionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
`;

export const ComicsContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-y: hidden;

  overflow-x: scroll;
  scrollbar-width: thin;
  scrollbar-color: red transparent;

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const ComicCard = styled.div`
  width: 170px;
  height: 340px;
`;

export const ComicImage = styled.img`
  width: 170px;
  height: 250px;
`;

export const ComicTitle = styled.h5`
  margin: 15px 0 2px;
`;

export const ComicYear = styled.span`
  font-size: 12px;
  font-weight: 400;
`;
