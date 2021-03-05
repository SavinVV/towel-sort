module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  let result = [];
  matrix.forEach((arr, i) => {
      if (i % 2 == 0) {
          arr.forEach((number) => {
              result.push(number);
          });
      } else {
          for (let n = arr.length - 1; n >= 0; n--) {
              result.push(arr[n]);
          }
      }
  });
  return result;
};
