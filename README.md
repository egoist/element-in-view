# element-in-view

[![NPM version](https://img.shields.io/npm/v/element-in-view.svg?style=flat)](https://npmjs.com/package/element-in-view) [![NPM downloads](https://img.shields.io/npm/dm/element-in-view.svg?style=flat)](https://npmjs.com/package/element-in-view) [![CircleCI](https://circleci.com/gh/egoist/element-in-view/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/element-in-view/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Features

- Small and focus, only **580 bytes** and exports a single function.
- Supporting all modern browsers and IE9+.

## Comparison

Comparing to [in-viewport](https://github.com/vvo/in-viewport) and [in-view](https://github.com/camwiegert/in-view), `element-in-view` only exports a function for checking if an element is in viewport, handling events and other stuffs are left to user-land. In fact, this library is extracted from [in-view](https://github.com/camwiegert/in-view), I tried to use that library in [vue-mugen-scroll](https://github.com/egoist/vue-mugen-scroll), I need to use a custom logic to handle events, so many features in `in-view` become useless, that's why this library exists.

## Install

```bash
yarn add element-in-view
```

CDN: [UNPKG](https://unpkg.com/element-in-view/dist/) | [JSDelivr](https://cdn.jsdelivr.net/npm/element-in-view/dist/)

## Usage

```js
import inView from 'element-in-view'

window.addEventListener('scroll', () => {
  inView(element)
  //=> true or false
})
```

## API

Note that the API doc is partially extracted from [in-view](https://github.com/camwiegert/in-view#api).

### inView(element, [options])

#### element

A DOM [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element).

#### options

##### options.offset

Type: `Number` `object`<br>
Default: `0`

By default, `element-in-view` considers something in viewport if it breaks any edge of the viewport. This can be used to set an offset from that edge. For example, an offset of `100` will consider elements in viewport if they break any edge of the viewport by at least `100` pixels. offset can be a positive or negative integer.

Offset can also be set per-direction by passing an object.

```js
{
  top: 100,
  right: 75,
  bottom: 50,
  left: 25
}
```

##### options.threshold

Type: `Number`<br>
Default: `0`

Set the ratio of an element's height and width that needs to be visible for it to be considered in viewport. This defaults to `0`, meaning any amount. A threshold of `0.5` or `1` will require that half or all, respectively, of an element's height and width need to be visible. threshold must be a number between `0` and `1`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**element-in-view** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/element-in-view/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
