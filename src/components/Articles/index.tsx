import React, { memo } from "react";
import { Container, Title } from "./styles";

interface Props {
  title: string;
  summary: string;
  newsSite: string;
  updatedAt: string;
}

function ArticlesComponent({ title, summary, newsSite, updatedAt }: Props) {
  console.log("TILE: ", title);
  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <p>{updatedAt}</p>
        <p>{newsSite}</p>
      </div>
      <p>{summary}</p>
      <button>Ver Mais</button>
    </Container>
  );
}

export const Articles = memo(ArticlesComponent);
