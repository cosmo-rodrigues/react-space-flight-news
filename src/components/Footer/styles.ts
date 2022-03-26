import styled from "styled-components";

export const Container = styled.footer`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 30px;
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
`;
