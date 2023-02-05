<h1 align="center">
  Gatsby Starter Portfolio: DawnTilDusk
</h1>

## Overview

[GatsbyJS](https://www.gatsbyjs.com/) is a free and open source static website builder build on React. It's one implementation of the [JAMstack](https://jamstack.org/) idea which creates high speed webpages.

This is a clean, minimal, and responsive starter for creating portfolios or blogs with Gatsby.

## Prerequisites

- [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/part-zero/#using-the-gatsby-cli)

## Portfolio Features

- [x] IE 11 Compliant
- [x] Firefox Compliant
- [x] Chrome Compliant
- [x] Responsive
- [x] SCSS
- [x] Contentful CMS
- [x] Contentful Delivery System(So blogs deliver straight from Contentful)
- [x] React JavaScript Library
- [x] Gatsby JS Framework
  - Gatsby Plugins
- [x] Minimal responsive design - made to customize or tear apart
- [x] Pagination logic
- [x] SEO (Very Basic SEO, need to add socials)
- [ ] Site Favicon
- [x] Uses Local Storage
- [x] No Errors (so far)
- [ ] Newsletter (@TODO)
- [x] Components in scope:
  - SEO REACT HELMET
  - Layout
  - Dark/Light Mode
    - Toggle
  - Intro Section
  - Background
  - Skills
  - Experience
  - Blogs Post Section
    - Blog Post Page
  - Github Projects Section
  - Footer

## Demo

https://tm97.gatsbyjs.io

![portfoliogiphy](https://raw.githubusercontent.com/TEE-EMM97/portfolio_site-WIP-/master/src/images/portfoliogiphy.webp)

## Getting Started

### Install

```
git clone https://github.com/TEE-EMM97/portfolio_site-WIP-.git
yarn install
```

```
gatsby new your-project-name-here https://github.com/TEE-EMM97/portfolio_site-WIP-.git
```

### Setup Contentful

1.  [Sign up](https://www.contentful.com/sign-up/) for Contentful and create a new empty space

1.  Find your credentials in your space here: **app.contentful.com** → **Space Settings** → **API keys**.

1.  Go back to the project in your and in your editor navigate to `src/gatsby-config.js`.

1.  Replace the following with your `SPACE_ID` & `ACCESS_TOKEN`

**Note:** If you do not see your changes reflected when developing locally you may need to run `yarn clean` followed by restarting the server via `yarn develop`.

### 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── yarn.lock
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the [MIT license](https://github.com/SafdarJamal/gatsby-bootcamp-blog/blob/master/LICENSE).

10. **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

### 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/TEE-EMM97/portfolio_site-WIP-)

### 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/ibethatlo) and share the project with me.

Please star this project or share it on Social Media! Thanks
