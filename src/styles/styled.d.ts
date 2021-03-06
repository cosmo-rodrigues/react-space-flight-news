import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      danger: string;
      primary: string;
      secondary: string;
      sky: string;
      text: string;
    };
    bgImage: string;
  }
}
