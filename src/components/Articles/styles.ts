import styled from "styled-components";

export const Container = styled.section`
  background-color: tomato;
  margin: 10px;
  padding: 5% 30%;
  width: 100%;
  z-index: 5;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.danger};
`;

export const TextContent = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;
