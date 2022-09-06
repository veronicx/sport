### `Real Sport`

Real Sport is an application which provides all data for Fifa Cards, allowing you to find all the card's you need.

### `Landing Page` 

I've started the landing page or the table page by creating the table component, the table component could've been replaced by a library called 'Vue-good-table' which is a library that offers a responsive table with filtering enabled by default. However, there were some fundamental issues with the library. the library was not SSR Supported, and with my intention of everything to be SSR, I've scratched the idea and started making my table with SSR. I've started making a simple responsive table with filtering enabled for Position, Shooting, Physical, Defense, etc. I've added the redirection to the detail page only when clicking on the player name as it was the best choice for mobile users. As a final step, I've added an alternate text if we don't get any data from our API or store.

### `Detail Page`

I started working on the detail page after finishing the landing page. With this in mind, it was time to build the Detail Page. The core principle for the page was to be a dynamic page based on the slug of the player. Based on the slug property from the player, we can generate a query to find that player if the player data are not stored. The Player Component was designed to be as responsive and straightforward as feasible. Since not all of the players shared the same statistics, I applied validation to each player's data statistics to eliminate any potential problems. If the player is unavailable in-store or unavailable via the API, I've included a note describing the situation and redirection to the landing page

### `Store`

I've included Vuex to store the current player on the detail page and all the players on the landing page for two reasons: Minimize  API requests for the same data to improve transition and shorten CLS wait times.

