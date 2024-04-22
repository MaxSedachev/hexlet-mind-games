const random = (min, max) => {
  const minRangeValue = Math.ceil(min);
  const maxRangeValue = Math.floor(max);
  return Math.floor(Math.random() * (maxRangeValue - minRangeValue) + minRangeValue);
};

export default random;
