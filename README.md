# Template for Next.js app with styled-components

This example features how yo use [styled-components](https://github.com/styled-components/styled-components) which supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. 

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/niklaspeterson/next-styled-components-template)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/niklaspeterson/next-styled-components-template.git`
2. Navigate to the directory and run `npm run dev` or `yarn dev`
3. Make your changes
4. Connect to [Netlify](https://url.netlify.com/Bk4UicocL) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)

**Option three:** Next example

To create your app using the template, open your terminal, `cd` into the directory you'd like to create the app in,
and run the following command:

```
npx create-next-app your-app --example "https://github.com/niklaspeterson/next-styled-components-template"
```

```bash
npm run dev
# or
yarn dev
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Dependencies

- [Next.js](https://nextjs.org/)
- [Styled-components](https://www.styled-components.com)
