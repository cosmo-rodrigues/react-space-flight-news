import { Button } from "@mui/material";
import { memo } from "react";
import {
  CardsWrapper,
  Container,
  Content,
  ImageContainer,
  Infos,
  Image,
  TextContent,
  Title,
} from "./styles";

interface Props {
  title: string;
  summary: string;
  newsSite: string;
  updatedAt: string;
  imageUrl: string;
}

function ArticlesComponent({
  title,
  summary,
  newsSite,
  updatedAt,
  imageUrl,
}: Props) {
  return (
    <Container>
      <CardsWrapper>
        <ImageContainer>
          <Image src={imageUrl} />
        </ImageContainer>
        <Content>
          <Title>{title}</Title>
          <Infos>
            <p>{updatedAt}</p>
            <button>{newsSite}</button>
          </Infos>
          <TextContent>{summary}</TextContent>
          <Button sx={{ marginLeft: "auto" }} variant="contained">
            See More
          </Button>
        </Content>
      </CardsWrapper>
    </Container>
  );
}

export const Articles = memo(ArticlesComponent);
