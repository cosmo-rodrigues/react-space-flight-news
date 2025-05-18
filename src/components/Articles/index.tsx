import { memo, useEffect, useRef, useState } from "react";

import { Button, Grid } from "@mui/material";
import { ModalComponent } from "./components/modal";

import gsap from "gsap";

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
  url: string;
  title: string;
  summary: string;
  newsSite: string;
  updatedAt: string;
  imageUrl: string;
}

function ArticlesComponent({
  url,
  title,
  summary,
  newsSite,
  updatedAt,
  imageUrl,
}: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let app = useRef(null);
  let element01 = useRef(null);
  let element02 = useRef(null);
  let element03 = useRef(null);
  let element04 = useRef(null);
  let element05 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [
        app.current,
        element01.current,
        element02.current,
        element03.current,
        element04.current,
        element05.current,
      ],
      3,
      { y: 50 },
      { y: 0, opacity: 0.9 }
    );
  }, []);

  return (
    <>
      <Container ref={app}>
        <CardsWrapper>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} ref={element01}>
              <ImageContainer>
                <Image
                  src={imageUrl ? imageUrl : "/rocket-svgrepo-com.svg"}
                  alt="News image"
                />
              </ImageContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Content>
                <Title ref={element02}>{title}</Title>
                <Infos ref={element03}>
                  <p>{updatedAt}</p>
                  <span>{newsSite}</span>
                </Infos>
                <TextContent ref={element04}>{summary}</TextContent>
                <Button
                  ref={element05}
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
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title={title}
        summary={summary}
        url={url}
        updatedAt={updatedAt}
        imageUrl={imageUrl}
      />
    </>
  );
}

export const Articles = memo(ArticlesComponent);
