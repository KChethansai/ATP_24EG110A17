# Week 3 — MongoDB, Mongoose, JWT Authentication & Protected APIs

**Dates:** 05 Mar 2026 – 07 Mar 2026 | **Roll No:** 24EG110A17

---

## Overview

Week 3 builds a full backend with MongoDB + Mongoose, password hashing with bcryptjs, JWT-based authentication stored in HTTP-only cookies, and protected CRUD routes for both Users and Products. The same `Backend-2` project is progressively refined across Days 6, 7, and 8.

---

## Days 6, 7 & 8 — 05–07 Mar 2026

> The `Backend-2` project is identical across all three days, representing iterative development and in-class refinement of the same codebase.

### Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- bcryptjs (password hashing)
- jsonwebtoken (JWT)
- cookie-parser (HTTP-only cookie storage)
- dotenv (environment config)

### Project Structure

```
Backend-2/
├── server.js                   # Entry point — mounts routers, error handling middleware
├── package.json
├── req.http                    # REST Client test requests
├── auth/
│   └── auth.js                 # JWT sign/verify helpers
├── middlewares/
│   └── verifyToken.js          # Reads JWT from cookie, decodes, attaches req.user
├── models/
│   ├── UserModel.js            # User schema with embedded cart sub-document
│   └── ProductModel.js         # Product schema with price range validation
└── APIs/
    ├── UserAPI.js              # Register, login, CRUD users, add to cart
    ├── ProductAPI.js           # CRUD products (all protected)
    └── Theory.md               # Notes: same-origin vs cross-origin, cookies & tokens
```

### Data Models

**User Schema** (`UserModel.js`)

```js
{
  username: String  (required, minLength: 4, maxLength: 6),
  password: String  (required, hashed with bcryptjs),
  email:    String  (required, unique),
  age:      Number,
  cart: [{
    product: ObjectId (ref: 'product'),
    count:   Number   (default: 1)
  }]
}
```

**Product Schema** (`ProductModel.js`)

```js
{
  productId:   Number (required),
  productName: String (required),
  price:       Number (required, min: 10000, max: 50000),
  brand:       String (required)
}
```

### Authentication Flow

1. **Register** → `POST /user-api/users` — password is hashed with `bcryptjs` before saving
2. **Login** → `POST /user-api/auth` — password compared with `bcryptjs.compare`, JWT signed and stored as HTTP-only cookie
3. **Protected routes** → `verifyToken` middleware reads `req.cookies.token`, verifies JWT, attaches decoded payload to `req.user`

### API Routes

**User API** (`/user-api`)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/user-api/auth` | Login → JWT cookie | Public |
| POST | `/user-api/users` | Register new user | Public |
| GET | `/user-api/users` | Get all users | Protected |
| GET | `/user-api/user` | Get current user (with populated cart) | Protected |
| PUT | `/user-api/users/:id` | Update user by ID | Protected |
| DELETE | `/user-api/users/:id` | Delete user by ID | Protected |
| PUT | `/user-api/cart/product-id/:pid` | Add product to cart (increment if exists) | Protected |

**Product API** (`/product-api`)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/product-api/products` | Create a product | Public |
| GET | `/product-api/products` | Get all products | Protected |
| GET | `/product-api/products/:id` | Get product by `productId` | Protected |
| PUT | `/product-api/products/:id` | Update product | Protected |
| DELETE | `/product-api/products/:id` | Delete product | Protected |

### Additional Resource

`Day-6/mongodb-employees.docx` — Practice MongoDB queries on employee data.

---

## Setup & Run

```bash
cd Day-6\(05-03-2026\)/Backend-2
npm install
```

Create a `.env` file:

```
PORT=4000
DB_URL=mongodb+srv://<user>:<pass>@cluster.mongodb.net/backend2
SECRET_KEY=your_jwt_secret
```

```bash
node server.js
```

Use `req.http` with the VS Code REST Client extension to test all routes.
