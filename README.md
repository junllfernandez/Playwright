## Install Playwright

- npm init playwright@latest

## How to run tests

Run tests headless
- npm run test:headless

Run tests headed
- npm run test:headed

Debug tests
- npm run debug

Open test report on a browser
- npm run report


Test case

Verify home page items

Given mcdonalds website (mcdonalds.co.nz) is visited
Then McDonalds home page is displayed


Search functionality

Given mcdonalds website (mcdonalds.co.nz) is visited
When search icon is clicked
Then search bar is displayed

When double big mac is typed in the search bar
And enter button is pressed
Then results page contains articles for Double big Mac

When first search result is clicked
Then Double Big Mac description page is displayed


View full menu

Given mcdonalds website (mcdonalds.co.nz) is visited
When hamburger menu button is clicked
Then header navigation is displayed

When Menu option is clicked
Then Menu page is displayed

When Full Menu option is clicked
Then Full Menu page is displayed


View rewards page

Given mcdonalds website (mcdonalds.co.nz) is visited
When burger icon is clicked
Then Menu page is displayed

When Pick-up option is clicked
Then MyMacca's Rewards page is displayed

When slider for point is adjusted
Then available items for given points are available
