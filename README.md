# E-Dokan - Online E-Commerce Store

A modern, full-stack e-commerce platform built with [Next.js](https://nextjs.org), React, and MongoDB. E-Dokan provides a seamless shopping experience with product browsing, user authentication, and product management capabilities.

## Project Description

E-Dokan is a comprehensive e-commerce solution designed to deliver an exceptional online shopping experience. Built on Next.js App Router with server-side rendering, the platform combines a responsive frontend with a robust backend API to manage products, users, and orders efficiently. The application leverages MongoDB for data persistence and includes modern UI components powered by Tailwind CSS and DaisyUI.

## Setup & Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB connection string (set `MONGODB_URI` and `DBNAME` in `.env.local`)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd e-dokan
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env.local` file in the project root:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   DBNAME=your_database_name
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Route Summary

| Route | Purpose | Component |
|-------|---------|-----------|
| `/` | Home page | Home with hero, slider, products, promotions, testimonials |
| `/products` | Browse all products | Product listing page |
| `/add-product` | Admin product creation | Form to add new products to inventory |
| `/login` | User authentication | User login page |
| `/register` | User registration | Create new user account |
| `/about` | Company information | About Us page |
| `/contact` | Contact information | Contact Us page |

## Implemented Features

### 🛍️ Core E-Commerce Features
- **Product Browsing**: View all products with details, images, and ratings
- **Popular Items Section**: Highlight featured and trending products
- **Product Cards**: Clean, responsive product display with pricing and ratings
- **Image Carousel**: Interactive slider for product showcasing and promotions

### 👤 User Management
- **User Registration**: Create new customer accounts
- **User Login**: Secure authentication system
- **User Profiles**: Store user information in MongoDB

### ➕ Admin Features
- **Add Products**: Admin form to add new products to the catalog
- **Product Management**: Create and manage product inventory

### 🎨 UI/UX Features
- **Responsive Design**: Mobile-first design using Tailwind CSS and DaisyUI
- **Interactive Slider**: Product and promotion carousel using Swiper.js
- **Navigation Bar**: Dynamic header with logo and menu
- **Footer**: Consistent footer across all pages
- **Toast Notifications**: User feedback via react-toastify

### 📱 Additional Pages
- **Hero Section**: Eye-catching landing page banner
- **About Us**: Company information and mission
- **Contact**: Customer contact page
- **Testimonials**: Customer reviews and ratings

## Feature Explanations

- **Product Listing**: Browse a curated collection of products with filtering and sorting capabilities
- **Add Product Form**: Admin interface to submit new products with name, description, price, and images
- **Authentication System**: Secure login/register system protecting user data
- **Database Integration**: MongoDB stores products, users, cart items, and orders
- **Server Actions**: Next.js server actions handle product creation and data mutations securely
- **Responsive Navigation**: DaisyUI components provide accessible, mobile-friendly navigation
- **Visual Feedback**: Toast notifications keep users informed of actions and errors

## Tech Stack

- **Frontend**: React 19, Next.js 16
- **Styling**: Tailwind CSS, DaisyUI
- **Database**: MongoDB
- **UI Components**: React Icons, Swiper
- **Notifications**: react-toastify
- **Build Tool**: Next.js with Webpack

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)
