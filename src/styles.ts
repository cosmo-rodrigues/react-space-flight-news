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
  ${({ activeTheme }) =>
    activeTheme === "dark"
      ? css`
          background-image: linear-gradient(
            220deg,
            hsl(243deg 29% 25%) 1%,
            hsl(229deg 36% 31%) 50%,
            hsl(221deg 44% 36%) 50%,
            hsl(215deg 53% 41%) 50%,
            hsl(211deg 63% 45%) 99%
          );
        `
      : css`
          background-image: linear-gradient(
            220deg,
            hsl(177deg 90% 70%) 1%,
            hsl(176deg 90% 79%) 50%,
            hsl(176deg 90% 87%) 50%,
            hsl(175deg 91% 94%) 50%,
            hsl(0deg 0% 100%) 99%
          );
        `}

  height: 100vh;
  width: 100%;
`;
