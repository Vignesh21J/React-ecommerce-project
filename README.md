# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# React E-commerce Product Filter App

A modular React-based e-commerce product browsing application with *multi-criteria filtering*. This project allows users to search and filter products by category, brand, color, title, and price using an intuitive set of UI controls.

---


## Features

- *Search Filtering* – Filter products by typing keywords into a search input.
- *Radio Filters* – Select category, brand, color, or price using exclusive radio buttons.
- *Recommended Filters* – One-click recommended tags for fast filtering.
- *Product Cards* – Display filtered products dynamically with reusable Card components.

---

## Component Overview

### App.js
- Main entry point and state manager.
- Holds selectedCategory and query as state.
- Contains filteredData() function to apply filtering logic.
- Renders all child components.

### Navigation
- Contains the search input field.
- Sends user input back to App via props.

### Sidebar
- Provides filter options (category, color, company, price).
- Triggers state update via handleChange().

### Recommended
- Displays suggested filter buttons.
- Uses handleClick() to update the active filter.

### Products
- Displays the filtered list of Card components.
- Receives filtered result as prop from App.

### Card
- Displays product details: image, title, star rating, reviews, old and new prices.

---

## Filtering Logic
The filtering logic is handled in the `filteredData()` function.
