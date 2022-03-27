import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 9vh;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 3rem;
    left: 43%;
    position: absolute;
    top: 30%;
  }

  nav {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 3;

    button {
      color: ${({ theme }) => theme.colors.text};
      font-weight: 700;
    }

    svg {
      fill: ${({ theme }) => theme.colors.text};
      font-size: 3rem;
    }
  }
`;
