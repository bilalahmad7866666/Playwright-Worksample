# Bunch Help Center Tests on Playwright

## Description
This project contains Playwright test cases for the general functionality of the Bunch Capital Help Center. These are the most basic funtionalities you can check in a website, and can only be considered as a basic work sample.

## Test Cases

1. **Search Functionality**
   - *Objective*: Ensure that the search functionality works correctly.
   - *Steps*:
     1. Navigate to the Help Center.
     2. Enter a search query and press Enter. (It cannot be empty)
     3. Click on the first result link.
   - *Assertions*:
     - Verify that the search results are displayed.
     - Verify that search results are according to the search keyword.
     - Verify that the first result link content is displayed.

2. **Navigate to Different Sections**
   - *Objective*: Validate the navigation functionality.
   - *Steps*:
     1. Navigate to the Help Center.
     2. Click on different navigations tab.
   - *Assertions*:
     - Verify that the content of the new page is visible accordingly.
     - Verify that the elements are found accordingly.
     - Verify that the URL link is changed accordingly.

3. **Visibility of content**
   - *Objective*: Ensure that the content on help centre is visible.
   - *Steps*:
     1. Navigate to the Help Center.
     2. Verify visiblity of the items on the help centre page.
   - *Assertions*:
     - Confirm that the content (Header, Footer, Body, etc) is visible.


## How to Run Tests

- Clone this repository.
- Run `npm install` to install dependencies.
- Execute `npx playwright test` to run the tests.
