import trim from 'lodash/trim';

function round(number, precision) {
  const factor = 10 ** precision;
  const factored = number * factor;
  const rounded = Math.round(factored);
  return rounded / factor;
}

const alignCents = (cents) => (
  cents < 10 ? `0${cents}` : `${cents}`
);

export function formatPrice(price, withFree = false) {
  if (price === 0 && withFree) {
    return 'Free';
  }

  const rounded = round(price, 2);
  const dols = Math.floor(rounded);
  const cents = Math.floor((rounded * 100) % 100);

  return `$${dols}.${alignCents(cents)}`;
}

export function formatName(firstName, lastName) {
  return trim(`${firstName || ''} ${lastName || ''}`);
}
