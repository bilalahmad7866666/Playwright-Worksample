# Bunch Help Center Tests on Playwright

This project contains Playwright test cases for the general functionality of the Bunch Capital Help Center.

## Test Cases

1. **Search Functionality**
   - *Objective*: Ensure that the search functionality works correctly.
   - *Steps*:
     1. Navigate to the Help Center.
     2. Enter a search query and press Enter.
   - *Assertions*:
     - Verify that the search results are displayed.

2. **Navigate to Different Sections**
   - *Objective*: Validate the navigation functionality.
   - *Steps*:
     1. Navigate to the Help Center.
     2. Click on different navigations tab.
   - *Assertions*:
     - Confirm that the content of the new page is visible.

3. **Visibility of content**
   - *Objective*: Ensure that the content on help centre is visible.
   - *Steps*:
     1. Navigate to the Help Center.
     2. Verify visiblity of all the items on the help centre page.
   - *Assertions*:
     - Confirm that the content is visible.

4. **Check Chatbot Functionality**
   - *Objective*: Verify the functionality of the contact form.
   - *Steps*:
     1. Navigate to the Help Center.
     2. Verify funtionality of the chatbot.
   - *Assertions*:
     - Confirm that chatbot funtionalities work fine.


## How to Run Tests

- Clone this repository.
- Run `npm install` to install dependencies.
- Execute `npx playwright test` to run the tests.
