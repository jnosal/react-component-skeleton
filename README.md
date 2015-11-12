**NOTE: This repo only exists to illustrate the blog posts on [tech.adroll.com](http://tech.adroll.com/blog/frontend/2015/11/12/rollup-react-and-npm-at-adroll.html) and is not intended to be a functional component.**

# ar-react-component-skeleton

This is a component skeleton. No changes have been made to what the yeoman generator outputs.

For props you can pass to the component see [prop documentation](../docs/components.md#reactcomponentskeleton). For a usage example see [examples/example.jsx](examples/example.jsx).

## Demo

First run `npm install` at the root of the repo.

Then run `gulp dev` from `ar-react-component-skeleton/` and go to `localhost:9020`.

## Usage via `npm`

```
npm install ar-react-component-skeleton
```

```jsx
import React from 'react';
impor ReactComponentSkeleton from 'ar-react-component-skeleton';
import i18n_noop from 'ar-i18n-noop';

React.render(
    <ReactComponentSkeleton
        /* EXAMPLE PROPS GO HERE */
    />,
    document.getElementById('ar-react-component-skeleton-example-container')
);
```

To use the component styles in a custom SASS build, first import `bootstrap.scss` from [`ar-style-base`](../ar-style-base) and then include the styles for this component:

```scss
@import 'ar-style-base/.../bootstrap';
@import 'ar-react-component-skeleton/dist/styles/ar-react-component-skeleton';
```

## Usage via CDN

To use the compiled JavaScript without a build system, the following dependencies have to exist in the global scope:

- [`React`](http://facebook.github.io/react/)

```html
<html>
    <head>
        <!-- Bootstrap styles from ar-style-base -->
        <link rel='stylesheet' href='//assets1.adroll.com/rollup/ar-style-base/{version}/css/bootstrap.css' />
        <!-- ar-react-component-skeleton.css -->
        <link rel='stylesheet' href='//assets1.adroll.com/rollup/ar-react-component-skeleton/{version}/ar-react-component-skeleton.css' />
    </head>
    <body>
        <!-- JS dependencies -->
        <script src='...'></script>
        <!-- ReactComponentSkeleton JavaScript -->
        <script src='//assets1.adroll.com/rollup/ar-react-component-skeleton/{version}/ar-react-component-skeleton.js'></script>
        <script>
            React.render(
                React.createElement(Rollup.ReactComponentSkeleton, {
                    /* EXAMPLE PROPS GO HERE */
                }),
                document.getElementById('ar-react-component-skeleton-example-container')
            );
        </script>
    </body>
</html>
```
