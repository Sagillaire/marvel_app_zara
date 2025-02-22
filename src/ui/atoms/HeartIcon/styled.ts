import styled from "styled-components";

export const Svg = styled.svg<{ width?: number }>`
  width: ${({ width }) => width ?? 24}px;
  height: 23px;
`;

export const Path = styled.path<{ color?: string }>`
  fill: ${({ color }) => color ?? "#EC1D24"};
  fill-rule: evenodd;
  clip-rule: evenodd;
`;
