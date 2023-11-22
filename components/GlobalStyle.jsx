import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--color-background);
    color: var(--color-text);
    font-family: 'Nunito', sans-serif;
  }

  :root {
	--color-background: #F3F3F5;
	--color-text: #242424;
}

@media (prefers-color-scheme: dark) {
	:root {
		--color-background: #fff;
		--color-text: #242424;
	}
}

`;

export const theme = {
  colors: {
    primary: "#5E5CE6",
  },
};
