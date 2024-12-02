# Vite Project

This project is built using Vite, a fast and modern build tool for web development. To get started, make sure you have Node.js installed on your machine.

## Getting Started

1. **Install Dependencies**: Run the following command to install the necessary dependencies:
    ```bash
    npm install
    ```

2. **Run the Development Server**: Start the development server by running:
    ```bash
    npm run dev
    ```

## Features
- Data Fetching: Fetches data from the Star Wars API (SWAPI) to retrieve information about characters.
- Character List: Displays a list of Star Wars characters with their basic information.
- Character Details: Allows users to click on a character to view more detailed information about them.
- Error Handling: Displays error messages when data fetching fails.
- Loading State: Shows a loading spinner while data is being fetched.
- Context API: Uses React's Context API to manage and provide global state for characters and loading status.
- Refresh Functionality: Includes a refresh button to reload the list of characters.

## Data Fetching and State Management

- **Data Fetching**: Data is fetched using the `fetch` API to make HTTP requests to external APIs.
- **Context API**: The project uses React's Context API to store and manage global state. This allows for easy access to the fetched data across different components without prop drilling.

## Additional Details

- **Routing**: The project uses client-side routing to navigate between different pages.
- **State Management**: State is managed using React's built-in hooks.
- **Styling**: The project uses CSS modules for scoped and maintainable styles.