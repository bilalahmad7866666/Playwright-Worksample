//import { test, expect } from '@playwright/test';

//test('test', async ({ page }) => {
  // Navigate to the Help Center.
 // await page.goto('https://help.bunch.capital/en')
  // Click on different navigations tab.
  //await page.getByRole('link', { name: 'General General information' }).click();
 // await page.getByRole('link', { name: 'All Collections' }).click();
 // await page.getByRole('link', { name: 'Angel Roll-Ups Everything you' }).click();
  //await page.getByRole('link', { name: 'All Collections' }).click();
  //await page.getByRole('link', { name: 'Syndicates (SPVs) Everything' }).click();
  //await page.getByRole('link', { name: 'All Collections' }).click();
  //await page.getByRole('link', { name: 'Funds Everything you need to' }).click();
  //const page1Promise = page.waitForEvent('popup');
  //await page.getByTestId('large-screen-children').getByTestId('header-link-default').click();
 // const page1 = await page1Promise;
//});

import { test, expect } from '@playwright/test';

test('Navigation Test', async ({ page }) => {
  // Navigate to the Help Center.
  await page.goto('https://help.bunch.capital/en');

  // Click on General tab.
  await page.getByRole('link', { name: 'General General information' }).click();
   // Assert that the content of the new page is visible.
  const element = await page.waitForSelector('.z-1');
  expect(element).not.toBeNull(); // Ensure the element is found and visible

 // Navigate back to the 'All Collections' page.
  await page.getByRole('link', { name: 'All Collections' }).click();


 // Click on Angel Roll-Ups tab
  await page.getByRole('link', { name: 'Angel Roll-Ups Everything you' }).click();
  // Assert that the content of the new page is visible.
  const element2 = await page.waitForSelector('.flex');
  expect(element2).not.toBeNull(); // Ensure the element is found and visible

  // Navigate back to the 'All Collections' page.
  await page.getByRole('link', { name: 'All Collections' }).click();

 // Click on Syndicates (SPVs) tab
  await page.getByRole('link', { name: 'Syndicates (SPVs) Everything' }).click();

  // Assert that the content of the new page is visible.
  const element3 = await page.waitForSelector('.flex');
  expect(element3).not.toBeNull(); // Ensure the element is found and visible

  // Navigate back to the 'All Collections' page.
  await page.getByRole('link', { name: 'All Collections' }).click();

  // Click on Funds tab
  await page.getByRole('link', { name: 'Funds Everything you need to' }).click();

  // Assert that the content of the new page is visible.
  const element4 = await page.waitForSelector('.flex');
  expect(element4).not.toBeNull(); // Ensure the element is found and visible

  // Navigate back to the 'All Collections' page.
  await page.getByRole('link', { name: 'All Collections' }).click();
});