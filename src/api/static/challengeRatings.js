const challengeRatings = [
  { value: 0, label: '0' },
  { value: 0.125, label: '1/8' },
  { value: 0.25, label: '1/4' },
  { value: 0.5, label: '1/2' },
  ...Array.from(Array(31).keys(), n => n + 1).map(n => ({ value: n, label: `${n}` })),
];

export default challengeRatings;