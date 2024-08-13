function curriedAdd(total) {
  return function (num) {
    if (num === undefined) {
      return total;
    }
    return curriedAdd(total + num);
  };
}

module.exports = { curriedAdd };
