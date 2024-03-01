# KoinX 

This repository contains the implementation of the KoinX SEO Details Page, a React.js application that fetches and displays cryptocurrency-related information. Below are the details and instructions for running the project.

## Explaination:

### Components Implementation:

- All components are made in React.js.

### Coingecko API Integration:

- The Coingecko `/simple/price` API is utilized to fetch the price of Bitcoin in USD and INR, along with the 24-hour change.

    - API Parameters:
        - `ids`: `bitcoin`
        - `vs_currencies`: `inr,usd`
        - `include_24hr_change`: `true`

### TradingView Chart:

- The TradingView widget is embedded to display the BTCUSD chart, closely resembling the design from the Figma file.

### Trending Coins Component:

- Coingecko's `/search/trending` API is used to fetch the top 3 trending coins, displayed in the "Trending Coins" component on the right.

### You May Also Like Section:

- The "You May Also Like" section shows a horizontally scrollable carousel with the logo, symbol, price, price change, and price graph of the trending coins fetched from the previous API.

### Responsive UI:

- The UI is designed to be responsive.

### Hosting and Deployment:

- The code is hosted on GitHub: [GitHub Repository](https://github.com/Sruti-Nautiyal/KoinX)
- The application is deployed using Vercel: [Live Demo](https://koin-x-inky.vercel.app/)

## Optional Task:

### Dynamic Token Display:

- The application supports dynamic token display based on the URL. For example, `/bitcoin` shows Bitcoin's data and chart, and `/ethereum` shows Ethereum's data and chart.

- The Coingecko `/coins/{id}` API is used to fetch the symbol of the coin, enabling the rendering of the relevant price chart from TradingView.

## How to Run:

1. Clone the repository:

    ```bash
    https://github.com/Sruti-Nautiyal/KoinX.git
    ```

2. Install dependencies:

    ```bash
    cd koinX
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to view the application.

## Contributions:

Contributions to this project are welcome. Feel free to open issues and pull requests for any improvements or fixes.
