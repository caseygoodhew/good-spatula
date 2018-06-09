# Spatula
Spatula is a light weight and reliable binding of [htmlparser2](https://www.npmjs.com/package/htmlparser2), [css-select](https://www.npmjs.com/package/css-select) and [dom-serializer](https://www.npmjs.com/package/dom-serializer).

It's inspired by [Cheerio](https://www.npmjs.com/package/cheerio) with a focus on dom traversal using css-select.

The biggest improvement is in the consistency - spatula is re-wrappable. All functions (expect html() and text()) return a spatula instance meaning that you can traverse the dom using a consistent programatic style.

## installation
```bash
$ npm install good-spatula
```

## usage
```js
const expect = require('chai').expect;
const spatula = require('good-spatula');

const markup = ['<div data-name="bowser" class="surprise-father">',
    '<div data-name="mario" class="player player-one">Mario</div>',
    '<div data-name="luigi" class="player player-two">Luigi</div>',
    '</div>'
].join('');

const parent = spatula(markup);
const selection = parent.select('.player');

selection.forEach((x, i) => {
    const result = i ? 'Luigi' : 'Mario';
    expect(x.text()).to.equal(result);
});

expect(selection.map(x => x.attr('data-name'))).to.deep.equal(['mario', 'luigi']);

expect(parent.html()).to.equal(markup);
```

## Loading
Spatula can be loaded with markup, text, nothing, a dom element, an array of these things, or another spatula instance.

Spatula uses the lighting fast and forgiving [htmlparser2](https://www.npmjs.com/package/htmlparser2).

You'll probably just want to parse some markup
```js
spatula('<div>spatula waz here</div>');
```
but you can also pull in all kinds of other stuff
```js
spatula([
    undefined,
    '',
    'Mario',
    spatula('Luigi'),
    spatula('Bowser').getDom()
])
```
invalid elements (like undefined) will be gracefully trimmed out, while your other elements will be pulled into the result.

## select
Spatula uses a passthrough to [css-select](https://www.npmjs.com/package/css-select) which means that you get some awesome css selection. Make sure you checkout their documentation for the full list of supported selectors.

```js
const node = spatula(`
        <body>
            <h1>Title</h1>
            <div class="content">
                <div class="item item-1">Item One</div>
                <div class="item item-2">Item Two</div>
            </div>
        </body>`);

// use the select method directly
const title = node.select('h1').text();
// or use it implicitly
const content = node('.content');
// a select always returns a spatula instance
const items = content('.item');
```

## forEach, map
Use spatula's forEach and map implementations to traverse a spatula instance. The item passed in is always an spatula instance of the child element.

```js
const node = spatula(`
        <body>
            <h1>Title</h1>
            <div class="content">
                <div class="item item-1">Item One</div>
                <div class="item item-2">Item Two</div>
            </div>
        </body>`);

const values = node('.item').map(x => x.text());
// ['Item One', 'Item Two']
```

## text, html, attr
Spatula allows you to pull values our a spatula instance.
```js
const node = spatula(`
        <body>
            <h1>Title</h1>
            <div class="content">
                <div class="item item-1">Item One</div>
                <div class="item item-2">Item Two</div>
            </div>
        </body>`);

const item1 = node('.item-1').text();
// 'Item One'
const item1Class = node('.item-1').attr('class');
// 'item item-1'
const item1Html = node('.item-1').html();
// '<div class="item item-1">Item One</div>
```
