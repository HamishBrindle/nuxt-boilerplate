describe('some random shit', () => {
  test('should complete', () => {
    const { a, b } = { a: 2, b: 5 };
    return new Promise((resolve, reject) => {
      if (a > 1 && b < 6) {
        resolve(a + b);
      } else {
        reject();
      }
    });
  });
});
