import styled, { css } from "styled-components";

interface Props {
  activeTheme: string;
}

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Hero = styled.main<Props>`
  background-image: ${({ activeTheme }) => `url(${activeTheme})`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;
