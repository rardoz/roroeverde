# roroeverde

Personal Website

## Example Template

### PAGE

```html
<!doctype html>
<html lang="en">

    <head>
        <!--META-->
        <meta charset="utf-8">
        <title>roroeverde</title>
        <meta name="description" content="Maker of things. Seattleite. Hot mess.">
        <meta name="author" content="roroeverde">

        <!--STYLES-->
        <link rel="stylesheet" href="index.css" async />

        <!--JS-->
        <script type="text/javascript" src="index.js"></script>

        <!--TEMPLATES-->
        <link rel="import" href="/assets/shared/components/nav/index.html" async onload="onTemplateLoaded(this)" />

    </head>

    <body></body>

</html>
```

### Partial

```html
<template>
  <!--STYLES-->
  <link rel="stylesheet" href="/assets/shared/components/nav/index.css" async />

  <!--HTML-->
  <nav>Hello World!</nav>
</template>

<!--JS-->
<script type="text/javascript" src="/assets/shared/components/nav/index.js"></script>
```

### CSS

Flexbox-grid
http://flexboxgrid.com/

## References

https://www.html5rocks.com/en/tutorials/webcomponents/imports/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables

## Notes

### es6 imports

- Imports are async

```js
(async () => {
  var promise = await import("/assets/shared/nav/index.js");
  console.log(promise);
})();
```
