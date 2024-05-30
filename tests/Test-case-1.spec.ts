import { test, expect } from '@playwright/test';

test('Search Functionality', async ({ page }) => {

// Define constants for the selectors.
const helpCenterURL = 'https://help.bunch.capital/en';
const searchInputSelector = '[placeholder="Search for articles..."]';
const searchResultsSelector = '#__next > div > main > div > section > section > div.w-full';
const firstResultSelector = '.p-5';
const newPageContentSelector = '#__next > div > main > div > section > section > div > div > div:nth-child(2) > div > div.jsx-adf13c9b2a104cce > div > article > div > p';
  
// Define the search keyword as a constant variable.
  const searchKeyword = 'bunch?';
  
  // Navigate to the Help Center.
  await page.goto(helpCenterURL);

  // Enter a search query and press Enter.
  await page.click(searchInputSelector);
  await page.fill(searchInputSelector, searchKeyword);
  await page.press(searchInputSelector, 'Enter');

  // Wait for the search results to be displayed.
  await page.waitForSelector(searchResultsSelector);

  // Assert that the search results container is visible.
  const searchResults = await page.$(searchResultsSelector);
  expect(searchResults).not.toBeNull();

  // Get the text content of the search results.
  const searchResultsText = await page.textContent(searchResultsSelector);
  
  // Assert that the search results contain the keyword and are not empty.
  expect(searchResultsText).toContain(searchKeyword);
  expect(searchResultsText).not.toBeNull();

  // Click on the first search result link.
  const element = await page.waitForSelector(firstResultSelector);
  await element.click();

  // Wait for the content of the new page to be visible.
  const newPageContent = await page.waitForSelector(newPageContentSelector);

  // Assert that the content of the new page is visible.
  expect(newPageContent).not.toBeNull();
});