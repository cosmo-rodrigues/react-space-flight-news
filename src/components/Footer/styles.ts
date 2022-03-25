import styled from "styled-components";

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  width: 100%;
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 400;
`;
