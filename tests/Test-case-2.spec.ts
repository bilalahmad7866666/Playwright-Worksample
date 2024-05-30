import { test, expect } from '@playwright/test';

test('Navigation Test', async ({ page }) => {
  // Define constants for the locators.
  const helpCenterURL = 'https://help.bunch.capital/en';
  const generalTabLocator = page.getByRole('link', { name: 'General General information' });
  const allCollectionsLocator = page.getByRole('link', { name: 'All Collections' });
  const angelRollUpsTabLocator = page.getByRole('link', { name: 'Angel Roll-Ups Everything you' });
  const syndicatesTabLocator = page.getByRole('link', { name: 'Syndicates (SPVs) Everything' });
  const fundsTabLocator = page.getByRole('link', { name: 'Funds Everything you need to' });
  const generalContentLocator = '.z-1';
  const pageContentLocator = '.flex';

  // Navigate to the Help Center.
  await page.goto(helpCenterURL);

  // Click on General tab.
  await generalTabLocator.click();
  // Assert that the content of the new page is visible.
  const generalContent = await page.waitForSelector(generalContentLocator);
  expect(generalContent).not.toBeNull(); // Ensure the element is found and visible
  expect(await generalContent.isVisible()).toBe(true); // Ensure the element is visible

  // Verify the URL has changed.
  expect(page.url()).toContain('/general'); // Assuming the URL changes accordingly

  // Navigate back to the 'All Collections' page.
  await allCollectionsLocator.click();

  // Click on Angel Roll-Ups tab.
  await angelRollUpsTabLocator.click();
  // Assert that the content of the new page is visible.
  const angelRollUpsContent = await page.waitForSelector(pageContentLocator);
  expect(angelRollUpsContent).not.toBeNull(); // Ensure the element is found and visible
  expect(await angelRollUpsContent.isVisible()).toBe(true); // Ensure the element is visible

  // Verify the URL has changed.
  expect(page.url()).toContain('/angel-roll-ups'); // Assuming the URL changes accordingly

  // Navigate back to the 'All Collections' page.
  await allCollectionsLocator.click();

  // Click on Syndicates (SPVs) tab.
  await syndicatesTabLocator.click();
  // Assert that the content of the new page is visible.
  const syndicatesContent = await page.waitForSelector(pageContentLocator);
  expect(syndicatesContent).not.toBeNull(); // Ensure the element is found and visible
  expect(await syndicatesContent.isVisible()).toBe(true); // Ensure the element is visible

  // Verify the URL has changed.
  expect(page.url()).toContain('/syndicates'); // Assuming the URL changes accordingly

  // Navigate back to the 'All Collections' page.
  await allCollectionsLocator.click();

  // Click on Funds tab.
  await fundsTabLocator.click();
  // Assert that the content of the new page is visible.
  const fundsContent = await page.waitForSelector(pageContentLocator);
  expect(fundsContent).not.toBeNull(); // Ensure the element is found and visible
  expect(await fundsContent.isVisible()).toBe(true); // Ensure the element is visible

  // Verify the URL has changed.
  expect(page.url()).toContain('/funds'); // Assuming the URL changes accordingly

  // Navigate back to the 'All Collections' page.
  await allCollectionsLocator.click();
});