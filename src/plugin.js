const plugin = require('tailwindcss/plugin');

const generateFinalFilterValue = (filterOrder) => {
  const filters = [
    'blur',
    'brightness',
    'contrast',
    'grayscale',
    'hue-rotate',
    'invert',
    'saturate',
    'sepia',
    'drop-shadow',
  ];

  const orderedFilters = filterOrder
    .split(' ')
    .filter((part) => filters.includes(part));

  const finalFilters = [
    ...orderedFilters,
    ...filters.filter((filter) => !orderedFilters.includes(filter)),
  ];

  return finalFilters.map((part) => `var(--tw-${part})`).join(' ');
};

module.exports = plugin(function ({ addUtilities, theme, matchUtilities }) {
  const filterOrder = theme('filterOrder');

  // Add filter-order utilities based on theme config
  Object.entries(filterOrder).forEach(([name, order]) => {
    addUtilities({
      [`.filter-order-${name}`]: {
        filter: generateFinalFilterValue(order),
      },
    });
  });

  // Support arbitrary filter-order-* classes
  matchUtilities({
    'filter-order': (value) => ({
      filter: generateFinalFilterValue(value),
    }),
  });
});
