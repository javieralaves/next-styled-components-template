# Template for Next.js app with styled-components

This example features how yo use [styled-components](https://github.com/styled-components/styled-components) which supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. 

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

## Getting started

To create your app using the template, open your terminal, `cd` into the directory you'd like to create the app in,
and run the following command:

```
npx create-next-app your-app --example "https://github.com/niklas/next-styled-components-template"
```

```bash
npm run dev
# or
yarn dev
```

## Dependencies

- [Next.js](https://nextjs.org/)
- [Styled-components](https://www.styled-components.com)
