import React, { memo } from "react";
import { Container, Title } from "./styles";

interface Props {
  title: string;
  summary: string;
}

function ArticlesComponent({ title, summary }: Props) {
  console.log("TILE: ", title);
  return (
    <Container>
      <Title>{title}</Title>
      <p>{summary}</p>
    </Container>
  );
}

export const Articles = memo(ArticlesComponent);
