import styled from "styled-components";

import { devices } from "../../helpers/media_queries";

export const Image = styled.img`
  max-width: 130px;

  @media ${devices.tablet} {
    max-width: 200px !important;
  }
`;
