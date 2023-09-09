# MultiversX Explorer Clone
This project is a minimalistic replica of the MultiversX Explorer, leveraging APIs provided by MultiversX to visualize and navigate blockchain data.

# Overview
The application fetches and displays data by making HTTP requests to the MultiversX APIs. Users can explore blockchain data in a manner similar to the native MultiversX Explorer.

# Performance Considerations
Users might occasionally experience a slight delay when navigating between pages. This lag is primarily due to the rate limits imposed on the API: it allows only 2 calls per second.

# Features
Data Exploration: Dive deep into blockchain data, visualizing transactions, blocks, tokens, NFTs and more.
Responsive Design: Optimized for various screen sizes ensuring a smooth user experience across devices.
Rate Limit Handling: The application is designed to handle API rate limits gracefully, ensuring data integrity and user feedback.

# Purpose
This project was developed as a hands-on exercise to learn more about integrating third-party APIs into Angular applications, as well as refining skills in HTML and SCSS.

All the Apis from MultiversX: https://api.multiversx.com/

The project can be found here: https://multiversx-explorer.vercel.app/dashboard
