export const clone = (struct) => JSON.parse(JSON.stringify(struct));

export const is = (...args) => y => args.some(x => x === y);

const matched = x => ({
  on: () => matched(x),
  otherwise: () => x,
});

export const match = (...args) => ({
  on: (pred, fn) => (
    pred(...args)
      ? matched(fn(...args))
      : match(...args)
  ),
  otherwise: fn => fn(...args),
});

export const range = (lower, upper) =>
  Array.from(new Array(upper - lower), (x, i) => i + lower);
