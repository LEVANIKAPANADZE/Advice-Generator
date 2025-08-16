# Advice Generator

A simple web application that fetches random advice from the [Advice Slip API](https://api.adviceslip.com/) and displays it in a modern, responsive interface. Click the dice icon to get a new piece of advice.

## Features

- Fetches a random piece of advice from the API.
- Displays advice ID and text in a stylish card.
- Responsive design for mobile and desktop.
- Interactive dice button to refresh the advice.

## Technologies Used

- **HTML5** – Markup for the page structure.
- **CSS3** – Styling with responsive design.
- **JavaScript (ES6)** – Fetching advice and handling click events.
- **Advice Slip API** – Provides random advice slips.

## How It Works

1. When the page loads, the `getAdvice()` function is called.
2. `getAdvice()` fetches advice from the API and updates the `.box` container.
3. Clicking the dice button reloads the page to fetch new advice.

## How to Run

1. Clone the repository or download the project.
2. Open `index.html` in your browser.
3. Click the dice icon to fetch new advice.

## License

This project is open-source and free to use.
