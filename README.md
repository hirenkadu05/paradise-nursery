# Paradise Nursery Shopping Application

A responsive online plant shop built with React, Vite, Redux Toolkit, and React Router.

## Features

- Landing page with the **Paradise Nursery** name, a plant background image, a company description, and a **Get Started** button.
- A plant catalog with **18 unique plants** in **3 categories** (six plants per category).
- Plant image, name, description, price, and **Add to Cart** button for every plant.
- After adding a plant, its Add to Cart button becomes disabled until that plant is removed from the cart.
- A navbar with **Home**, **Plants**, and **Cart** links, plus a live cart quantity badge.
- A Redux cart with `addItem`, `removeItem`, and `updateQuantity` reducers.
- A shopping cart that shows each item's image, name, unit price, quantity controls, and line total.
- Cart subtotal/total amount, **Continue Shopping**, and a **Checkout** button showing **Coming Soon**.

## Run locally

1. Install [Node.js](https://nodejs.org/) (v18 or later).
2. Run `npm install` inside the project folder.
3. Run `npm run dev`.
4. Open the localhost URL displayed in the terminal (usually `http://localhost:5173`).

To check production compilation: `npm run build`.

## Key assignment files

- [`README.md`](README.md) — project details
- [`src/AboutUs.jsx`](src/AboutUs.jsx) — About Us section
- [`src/App.css`](src/App.css) — styles and landing background image
- [`src/App.jsx`](src/App.jsx) — landing page and routes
- [`src/CartSlice.jsx`](src/CartSlice.jsx) — Redux cart reducers
- [`src/ProductList.jsx`](src/ProductList.jsx) — catalog and Add to Cart
- [`src/CartItem.jsx`](src/CartItem.jsx) — shopping cart page

## Notes

Plant photography uses externally hosted Unsplash images. An internet connection is required to display those images. This sample shop does not process actual payments.
