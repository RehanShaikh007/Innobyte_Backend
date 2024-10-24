# Innobyte Ecommerce Backend

### This is the backend for the Innobyte Ecommerce application, built using the MERN stack (MongoDB, Express, React, and Node.js). It handles user authentication, product management, and order processing.

## Table of Contents

- Installation
- Environment Variables
- API Endpoints
  - Auth Routes
  - User Routes
  - Product Routes
  - Order Routes
- Middleware
- Technologies Used

## Installation

1. Clone the repository:

``` bash
git clone https://github.com/RehanShaikh007/Innobyte_Backend.git
```

2. Navigate to the project directory:

``` bash
cd Innobyte_Backend
```

3. Install the dependencies:

``` bash
npm install bcryptjs cookie-parser dotenv express jsonwebtoken mongoose nodemon
```
5. Start the server:

``` bash
npm start
```
## Environment Variables
- Create a .env file in the root directory and add the following:
``` bash
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=5000
```
## API Endpoints

### Auth Routes
These endpoints handle user authentication (signup, signin).

1. Sign Up User
   - URL: /api/auth/signup
   - Method: POST
   - Request Body:
   ``` bash
   {
   "username": "john_doe",
   "email": "john@example.com",
   "password": "yourpassword",
   "role": "user"
   }
   ```
   - Response:
     - Success: 200 OK
    ``` bash
    "User created Successfully!"
    ```
2. Sign In User
   - URL: /api/auth/signin
   - Method: POST
   - Request Body:
   ``` bash
   {
   "email": "john@example.com",
   "password": "yourpassword",
   }
   ```
   - Response:
     - Success: 200 OK
    ``` bash
    {
     "_id": "yourID",
    "username": "john_doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "date,time",
    "updatedAt": "date,time"
    }
    ```
### User Routes

1. Get User
   - URL: /api/user/:id
   - Method: GET
   - Response:
     - Success: 200 OK
    ``` bash
    {
    "_id": "yourID",
    "username": "john_doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "date,time",
    "updatedAt": "date,time"
    }
    ```

2. Update User
   - URL: /api/user/:id
   - Method: PUT
   - Request Body:
   ``` bash
   {
   "username": "john_doe",
   "email": "john@example.com",
   "password": "yourpassword",
   }
   ```
   - Response:
     - Success: 200 OK
    ``` bash
    {
     "_id": "yourID",
    "username": "john_doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "date,time",
    "updatedAt": "date,time"
    }
    ```
### Product Routes

1. List All Products
   - URL: /api/products
   - Method: GET
   - Description: Fetches a list of all available products.
   - Response:
     - Success: 200 OK
    ``` bash
    [
      {
      "_id": "productID",
      "name": "product_name",
      "description": "this is product",
      "price": 500,
      "category": "Category1",
      "stock": 10,
      "imageUrl": "https://....com",
      "createdAt": "Date,Time"
      },
      {
       ...
      },
    ]
    ```

2. View SIngle Product
   - URL: /api/products/:id
   - Method: GET
   - Description: Fetches a single product by its ID.
   - Response:
     - Success: 200 OK
    ``` bash
      {
      "_id": "productID",
      "name": "product_name",
      "description": "this is product",
      "price": 500,
      "category": "Category1",
      "stock": 10,
      "imageUrl": "https://....com",
      "createdAt": "Date,Time"
      }
    ```

3. Add New Product (Admin Only)
   - URL: /api/products
   - Method: POST
   - Description: Adds a new product to the catalog. Only accessible by Admins.
   - Request Body:
   ``` bash
      {
      "name": "product_name",
      "description": "this is product",
      "price": 500,
      "category": "Category1",
      "stock": 10,
      "imageUrl": "https://....com",
      }
    ```
   - Response:
     - Success: 201 OK
    ``` bash
    {
      "message": "Product created Successfully!",
      "product": {
         "_id": "productID",
         "name": "product_name",
         "description": "this is product",
         "price": 500,
         "category": "Category1",
         "stock": 10,
         "imageUrl": "https://....com",
         "createdAt": "Date,Time"
      }
    }
    ```
    
4. Update Product (Admin Only)
   - URL: /api/products/:id
   - Method: PUT
   - Description: Updates a product's details. Only accessible by admins.
   - Request Body:
   ``` bash
      {
      "name": "product_name",
      "description": "this is product",
      "price": 500,
      "category": "Category1",
      "stock": 10,
      "imageUrl": "https://....com",
      }
    ```
   - Response:
     - Success: 200 OK
    ``` bash
    {
      "message": "Product Updated Successfully!",
      "product": {
         "_id": "productID",
         "name": "product_name",
         "description": "this is product",
         "price": 500,
         "category": "Category1",
         "stock": 10,
         "imageUrl": "https://....com",
         "createdAt": "Date,Time"
      }
    }
    ```

5. Delete Product (Admin Only)
   - URL: /api/products/:id
   - Method: DELETE
   - Description: Deletes a product from the catalog. Only accessible by admins.
   - Response:
     - Success: 200 OK
    ``` bash
    {
      "message": "Product Deleted Successfully!",
      "product": {
         "name": "product_name"
      },
    }
    ```

