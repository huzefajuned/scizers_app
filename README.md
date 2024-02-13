# Scizers_app

## Overview

🚀 The Scizers_app is a React application designed to display a list of Star Wars characters fetched from the Star Wars API (SWAPI). It allows users to search for specific characters by name, paginate through the list of characters, and view detailed information about each character.

## Features

- **User Listing:** Displays a paginated list of Star Wars characters, including their name, hair color, skin color, gender, and the number of vehicles they own.

- **Search Functionality:** Allows users to search for specific characters by entering their name in the search input field. The list updates in real-time as users type their search query.

- **Pagination:** Enables users to navigate through the list of characters using pagination buttons. Users can move to the previous or next page of characters depending on the availability of data.

- **Dynamic Styling:** The background color of each user card is dynamically set to the character's hair color.

- **Responsive Design:** The application is designed to be responsive, providing an optimal viewing experience across various devices and screen sizes.

## Components

- **Header:** Displays the application logo and a search input field for searching characters.

- **UserCard:** Represents a single user card displaying information about a Star Wars character.

- **Loader:** Shows a loading spinner while fetching data from the API.

## Implementation Details

- The application fetches data from the SWAPI using Axios.
- Data fetching is implemented using React's useEffect hook, ensuring that data is fetched when the component mounts or when the current page changes.
- Search functionality is implemented by filtering the list of users based on the user's input in the search input field.
- Pagination is achieved by updating the current page URL and fetching the corresponding data from the SWAPI.
- The UI is styled using Tailwind CSS, providing a clean and modern design.

## Dependencies

- axios: For making HTTP requests to fetch data from the SWAPI.
- tailwindcss: A utility-first CSS framework used for styling the UI components.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Open the application in a web browser.
