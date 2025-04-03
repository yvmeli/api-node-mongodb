# API REST with Node.js, Express and MongoDB

## Description
A simple RESTful API for product management with CRUD operations.

## Installation
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with your MongoDB connection string:
MONGODB_URI=mongodb://localhost:27017/crud-api
PORT=3000

4. Run `npm start` or `npm run dev` for development with nodemon

## API Endpoints
- `POST /api/products` - Create a new product
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Git Flow Implementation
This project follows Git Flow with the following branches:
- `main` - Production releases
- `develop` - Integration branch for features
- `feature/*` - Feature branches
- `qa` - Quality assurance/testing branch