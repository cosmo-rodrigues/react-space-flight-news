import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import {
  CardsWrapper,
  Content,
  ImageContainer,
  Infos,
  Image,
  TextContent,
  Title,
  style,
} from "./styles";
import { Grid } from "@mui/material";

interface Props {
  open: boolean;
  handleOpen(): void;
  handleClose(): void;
  title: string;
  summary: string;
  newsSite: string;
  updatedAt: string;
  imageUrl: string;
}

export function ModalComponent({
  open,
  handleOpen,
  handleClose,
  title,
  summary,
  newsSite,
  updatedAt,
  imageUrl,
}: Props) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
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
                  </Infos>
                  <TextContent>{summary}</TextContent>
                </Content>
                <Button
                  onClick={() => handleOpen()}
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                >
                  Go To Website
                </Button>
              </Grid>
            </Grid>
          </CardsWrapper>
        </Box>
      </Modal>
    </div>
  );
}
