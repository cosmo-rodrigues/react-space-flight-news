import { Button, Grid } from "@mui/material";
import { memo, useState } from "react";
import ModalUnstyledDemo from "./components/modal";
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container>
        <CardsWrapper>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <ImageContainer>
                <Image src={imageUrl} />
              </ImageContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Content>
                <Title>{title}</Title>
                <Infos>
                  <p>{updatedAt}</p>
                  <button>{newsSite}</button>
                </Infos>
                <TextContent>{summary}</TextContent>
                <Button
                  onClick={() => handleOpen()}
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                >
                  See More
                </Button>
              </Content>
            </Grid>
          </Grid>
        </CardsWrapper>
      </Container>
      <ModalUnstyledDemo
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title={title}
        summary={summary}
        newsSite={newsSite}
        updatedAt={updatedAt}
        imageUrl={imageUrl}
      />
    </>
  );
}

export const Articles = memo(ArticlesComponent);
