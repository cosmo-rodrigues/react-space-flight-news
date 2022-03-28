import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0.9;
  padding: 5% 10%;
  width: 100%;
`;

export const CardsWrapper = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  padding: 30px 60px;
  width: 100%;
  max-width: 900px;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  width: 80%;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.danger};
`;

export const Infos = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.secondary};
  width: 90%;
`;

export const TextContent = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  maxWidth: 700,
  width: "90%",
};
