import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0;
  padding: 5% 10%;
  width: 100%;
`;

export const CardsWrapper = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  display: flex;
  min-height: 300px;
  justify-content: space-between;
  padding: 30px 60px;
  width: 100%;
  max-width: 900px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.sky};
  font-size: 1.5rem;
  font-weight: 600;
  text-shadow: -0.5px 0.5px 1px #f3f9f9;
`;

export const Infos = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  width: 100%;

  span,
  p {
    background-color: white;
    border-radius: 30px;
    font-weight: 600;
    padding: 1px 15px;
  }
`;

export const TextContent = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;
