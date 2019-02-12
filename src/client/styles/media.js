import { css } from 'styled-components';

const sizes = {
  ti: 360,
  xs: 576,
  sm: 768,
  md: 1024,
  lg: 1440,
  xl: 1920,
  hd: 2560,
};

const sizesAsEm = label => (`${sizes[label] / 16}em`);

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizesAsEm(label)}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export {
  media,
  sizes,
  sizesAsEm,
};
