import { test, expect } from '@playwright/test';

test('Visibility Verifications', async ({ page }) => {
  // Navigate to the Help Center.
  await page.goto('https://help.bunch.capital/en');

  // Define locators as constants.
  const headingLocator = page.getByRole('heading', { name: 'Advice and answers from the' });
  const searchInputLocator = page.getByPlaceholder('Search for articles...');
  const headerLinkLocator = page.getByTestId('large-screen-children').getByTestId('header-link-default');
  const comboBoxLocator = page.getByRole('combobox');
  const syndicatesLinkLocator = page.getByRole('link', { name: 'Syndicates (SPVs) Everything' });

  // Verify visibility of some items on the help center page.
  // Check the visibility of a heading.
  await expect(headingLocator).toBeVisible();

  // Check the visibility of a search input.
  await expect(searchInputLocator).toBeVisible();

  // Check the visibility of a link.
  const headerLink = await headerLinkLocator;
  await expect(headerLink).toBeVisible();

  // Check the visibility of a combobox.
  const comboBox = await comboBoxLocator;
  await expect(comboBox).toBeVisible();

  // Check the visibility of a specific link.
  const syndicatesLink = await syndicatesLinkLocator;
  await expect(syndicatesLink).toBeVisible();

  // Text Content Test
  // Find an element containing specific text content.
  const headingElement = await page.waitForSelector('h1');
  const headingText = await headingElement.textContent();
  // Verify that the text content matches the expected value.
  expect(headingText).toContain('Advice and answers from the');

  await page.close();
});