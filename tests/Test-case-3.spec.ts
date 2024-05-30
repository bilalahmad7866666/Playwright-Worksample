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

  // Attribute Test
  // Find a link element and get its href attribute.
  const loginLink = await page.waitForSelector('a[href="/login"]');
  const hrefAttributeValue = await loginLink.getAttribute('href');
  // Verify that the href attribute value matches the expected value.
  expect(hrefAttributeValue).toBe('/login');

  // Interaction Test
  // Simulate interaction by clicking on a link.
  await page.click('a[href="/login"]');
  // Wait for navigation to complete.
  await page.waitForNavigation();
  // Verify that the URL has changed to the login page.
  expect(page.url()).toBe('https://help.bunch.capital/login');
});