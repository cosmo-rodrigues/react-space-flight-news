import styled from "styled-components";

export const Container = styled.footer`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 30px;
  z-index: 2;
  width: 100%;
`;
