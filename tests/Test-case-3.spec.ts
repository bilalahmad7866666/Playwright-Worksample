import { test, expect } from '@playwright/test';

test('Visibility Verifications', async ({ page }) => {
  // Navigate to the Help Center.
  await page.goto('https://help.bunch.capital/en');

  // Verify visibility of some items on the help center page.

  // Check the visibility of a heading.
  await expect(page.getByRole('heading', { name: 'Advice and answers from the' })).toBeVisible();

  // Check the visibility of a search input.
  await expect(page.getByPlaceholder('Search for articles...')).toBeVisible();

  // Check the visibility of a link.
  const headerLink = await page.getByTestId('large-screen-children').getByTestId('header-link-default');
  await expect(headerLink).toBeVisible();

  // Check the visibility of a combobox.
  const comboBox = await page.getByRole('combobox');
  await expect(comboBox).toBeVisible();

  // Check the visibility of a specific link.
  const syndicatesLink = await page.getByRole('link', { name: 'Syndicates (SPVs) Everything' });
  await expect(syndicatesLink).toBeVisible();

  
});