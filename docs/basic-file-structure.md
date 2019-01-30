# File Structure

The following files and directories form the basic organization for code in
this project.

- `gatsby-config.js`

  List of Gatsby plugins each with its own set of configuration. See the
  official [Gatsby Config][gatsby-config-docs] documentation for more details.

- `gatsby-node.js`

  Programatically generates all pages for the project. See the official Gatsby
  [Creating a modifying pages][gatsby-node-docs] documentation for more
  details.

- `gatsby-browser.js`

  JavaScript injected into the browser for each page. This is typically used
  for polyfills and/or hooking into Gatsby-specific events. See the official
  [Gatsby Browser APIs][gatsby-browser-docs] documentation for more details.

- `.env.example`

  List of environment variables needed to run the project. Variables here are
  reserved for sensitive data like API keys and passwords. This file is used as
  a template for your own `.env.development` and `.env.production` files.

- `src/`

  Source code for the site.

  - `src/assets/`

    Static images, fonts, audio/video files, etc. used for the site. This
    folder is provided to
    [`gatsby-source-filesystem`][gatsby-source-filesystem] to allow
    [`gatsby-image`][gatsby-image] integration.

  - `src/components/`

    Reusable React components used in the main layout and slices. Note: the
    site's layout is in itself a component (`src/components/Layout.js`).

  - `src/controllers/` (optional)

    "Smart" React components that handle computational tasks with no UI. These
    components should use the [Render Props][render-props] pattern to provide
    data to "dumb" components to render their own UI.

  - `src/pages/`

    Pages not generated from the CMS such as a `404` page or site-wide search.

  - `src/prismic/`

    Prismic Custom Type definition files copied from Prismic. These files
    should mirror the configuration in the Prismic CMS to track changes.
    Unfortunately, this must be updated manually.

  - `src/slices/`

    React components used for Slices. See the [Slices](concept-slices.md)
    concept documentation for more details.

    - `src/slices/PageBody.js`

      Root Slices file where are Page Body Slices are registered for use in the
      main page template. See the [Create a Slice](guide-create-a-slice.md)
      guide for more details.

  - `src/templates/`

    Reusable React components used as templates for pages. Typically this will
    only contain a single template (`page.js`) since pages can customized with
    Slices instead.

  - `src/helpers.js` (optional)

    Collection of small helpers functions for data management. Each function in
    this file should contain a description of its usage and purpose.

  - `src/index.css` (optional)

    Global site-wide CSS styles typically used for resets. Note: this project
    uses [`minireset.css`][minireset-css] as a browser CSS reset.

  - `src/theme.js`

    Color, font family, and sizing definitions for use in styling.

[gatsby-config-docs]: https://www.gatsbyjs.org/docs/gatsby-config/
[gatsby-node-docs]: https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#creating-pages-in-gatsby-nodejs
[gatsby-browser-docs]: https://www.gatsbyjs.org/docs/browser-apis/
[gatsby-source-filesystem]: https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
[gatsby-image]: https://www.gatsbyjs.org/packages/gatsby-image/
[render-props]: https://reactjs.org/docs/render-props.html
[minireset-css]: https://github.com/jgthms/minireset.css/
