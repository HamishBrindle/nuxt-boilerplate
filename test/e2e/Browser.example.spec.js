/* eslint-disable no-undef */

import { findAll } from '../utils';

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
    await findAll('gLFyf gsfi');
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google');
  });
});
