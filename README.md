# AWS Lab

## Documentation

This project will use jsdoc to create documenation from code comments.
Example description:

```javascript
/** This is a description of the test function */
function test() {}
```

Adding more information with tags:

```javascript
/**
 * Description goes here
 * @constructor
 * @param {string} var1 - A string parameter
 * @param {string} var2 - Another string parameter
 */
function test(varl, var2) {}
```

Run jsdocs to generate html documentation in the ./out directory:

```bash
jsdoc <filename>.js
```

## Babel

This project is written using es7 modules and code is transpiled by Babel. To execute any .js file:

```bash
npx babel-node <filename.js>
```
