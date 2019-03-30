/* eslint-disable no-undef */

export const find = async (selector) => {
  await page.waitForSelector(selector);
  return page.$(selector);
};

export const findAll = async (selector) => {
  await page.waitForSelector(selector);
  return page.$$(selector);
};

export const containsText = async (text, wrapperSelector) => {
  const textSelector = `//text()[contains(.,'${text}')]`;
  const wrapper = wrapperSelector ? await find(wrapperSelector) : page;

  await page.waitForXPath(textSelector);
  const matches = await wrapper.$x(textSelector);

  return matches.length > 0;
};
