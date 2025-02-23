import styled from "styled-components";
import { device } from "../../utils/mediaQueries";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0px 150px;
  height: calc(100% - 90px);

  @media ${device.laptop} {
    padding: 80px;
  }

  @media ${device.tablet} {
    padding: 24px;
  }
`;

export const Content = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  color: black;
`;

export const Subtitle = styled.h3`
  color: black;
`;

export const List = styled.ul`
  color: gray;
  font-size: 14px;
`;

export const Image = styled.img`
  width: 35%;

  @media ${device.tablet} {
    display: none;
  }
`;
