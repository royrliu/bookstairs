![BookStairs Poster](../docs/images/github-poster.png#gh-light-mode-only)
![BookStairs Poster](../docs/images/github-poster-dark.png#gh-dark-mode-only)

This is the frontend for [BookStairs](https://github.com/bookstairs/bookstairs) project.

## Used Frameworks

We built the application base on a lot of modern frontend technologies. The below list contains the main part of open
source projects that BookStairs highly relies on.

1. [React](https://github.com/facebook/react)
2. [React Router](https://github.com/remix-run/react-router)
3. [React Query](https://github.com/tannerlinsley/react-query)
4. [Mantine](https://mantine.dev/)
5. [Formik](https://github.com/formik/formik)
6. [Immer](https://github.com/immerjs/use-immer)
7. [Clsx](https://github.com/lukeed/clsx)

## Project Structure

We have predefined the below directory tree for making this project more standard to develop.

```text
├── env
├── public
├── src
│   ├── assets
│   ├── components
│   ├── config
│   ├── constants
│   ├── helpers
│   ├── layouts
│   ├── pages
│   ├── service
│   └── styles
└── tsconfig.json
```

### public

It contains static files such as `index.html`, javascript library files, `images`, and other assets.
We put all the favicons in this file because these files are unchanged and would be moved to the root directory of the
final distribution.

### src

It contains the source code of the project.

### src/assets

It contains the assets like images, css & fonts.

### src/components

It contains the reusable atomic & molecular components. Each component folder will contain the component, test &
documentation file.

For example, when you need a `Button` component. It could be divided into five files explained below:

* `Button/Button.tsx`: It contain the actual component code.
* `Button/Button.style.tsx`: It contain the styles.
* `Button/Button.test.tsx`: It contain the Button unit test cases using [jest](https://jestjs.io/).
* `Button/main.tsx`: It merely imports the component file and exports this component.

### src/config

It contains the config files using the env.

### src/constants

It contains the constant file. Eg : Regex & other application generic constant.

### src/helpers

It contains the reusable helper functions.

### src/layouts

It contains the layout components. Layout is the common top wrapper component usually will contain navbar,
sidebar and children components.

### src/pages

[React Router 6](https://reactrouter.com/docs/en/v6) is the router library we used in this project. We put all the
routed pages in this directory by following the [Next.js](https://nextjs.org/docs/routing/introduction) routing style.
This feature is implemented by the [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages).

You can use all the router feature out of box
and [nested router](https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes)
is also supported.

### src/service

It contains the dynamic http request function using axios. Axios is a promise-based HTTP Client for node.js and the
browser Axios can be used for api request cancellation, featured with request and response interceptors.

### src/styles

It contains the styled components reusable breakpoints file, global styles & theme constant file.

### src/main.tsx

It contains method to render the application into real dom.
