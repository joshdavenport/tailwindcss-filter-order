# Tailwind CSS Filter Order

A plugin to order your CSS filters applied by Tailwind CSS. Order of filters passed to the `filter` property 
can drastically change the final result. Without use of this plugin filters are applied in the same order every
time because Tailwind has a hardcoded order.

## Installation

```
# npm
npm install --save-dev @savvywombat/tailwindcss-grid-areas

# yarn
yarn add --dev @savvywombat/tailwindcss-grid-areas

# pnpm
pnpm install --save-dev @savvywombat/tailwindcss-grid-areas
```

## Usage

```js
// tailwindcss.config.js
module.exports = {
  theme: {
    extend: {
      filterOrder: {
        'my-order': 'sepia invert brightness',
        'another-order': 'brightness sepia hue-rotate invert'
      },
    },
  },
  plugins: [
    require('@joshdavenport/tailwindcss-filter-order')
  ]
}
```

This generates the following new Tailwind utilities, for use in combination with the OOTB filter utilities
([brightness](https://tailwindcss.com/docs/brightness), [contrast](https://tailwindcss.com/docs/contrast), [sepia](https://tailwindcss.com/docs/sepia), etc):

```
filter-order-my-order
filter-order-another-order
```

Alternatively, you can use an arbitrary value passed to the utility:

```
filter-order-[sepia_invert_brightness]
```
