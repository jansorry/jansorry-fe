const createCounter = () => {
  let counterCount = 0;

  return () => {
    counterCount++;
    return counterCount;
  };
};

export default createCounter;
