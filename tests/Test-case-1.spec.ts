import { test, expect } from '@playwright/test';

test('Search Functionality', async ({ page }) => {
  // Navigate to the Help Center.
  await page.goto('https://help.bunch.capital/en');

  // Enter a search query and press Enter.
  await page.click('[placeholder="Search for articles..."]');
  await page.fill('[placeholder="Search for articles..."]', 'bunch?');
  await page.press('[placeholder="Search for articles..."]', 'Enter');

  // Wait for the search results to be displayed.
  const searchResults = await page.waitForSelector('#__next > div > main > div > section > section > div.w-full')

  // Assert that the search results are visible.
  expect(searchResults).not.toBeNull();

  // Click on the first search result link.
  const element = await page.waitForSelector('.p-5');
  await element.click();

  // Wait for the content of the new page to be visible.
  const newPageContent = await page.waitForSelector('#__next > div > main > div > section > section > div > div > div:nth-child(2) > div > div.jsx-adf13c9b2a104cce > div > article > div > p' );

  // Assert that the content of the new page is visible.
  expect(newPageContent).not.toBeNull();
});