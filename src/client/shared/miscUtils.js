export const clone = (struct) => JSON.parse(JSON.stringify(struct));

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
