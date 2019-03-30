import Button from '../../components/Button.vue';

describe('some random test', () => {
  test('should complete', async () => {
    const { a, b } = { a: 2, b: 5 };
    const result = await new Promise((resolve, reject) => {
      if (a > 1 && b < 6) {
        resolve(a + b);
      } else {
        reject();
      }
    });

    return result;
  });

  test('button should import', async () => !!Button);
});
