# Neptree Super App

Neptree is a comprehensive super app designed for use in Nepal. The app features UPI payments, online shopping, food and small items delivery, and a social media platform. This repository contains both the frontend (built with React) and backend (built with Django and Django REST Framework) components of the project.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Connecting Frontend and Backend](#connecting-frontend-and-backend)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **UPI Payments**
2. **Online Shopping**
3. **Food and Small Items Delivery**
4. **Social Media Platform**
5. **User Authentication**
6. **Customer Support**
7. **Personalization**
8. **Loyalty Programs**
9. **Analytics and Reporting**
10. **Marketing Tools**
11. **Multi-language Support**
12. **Location-Based Services**

## Prerequisites

- Node.js and npm
- Python 3.x
- PostgreSQL
- Django and Django REST framework

## Installation

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/neptree.git
   cd neptree/neptree-backend
   ```

2. **Create a virtual environment and activate it:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install the dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Setup PostgreSQL Database:**

   - Create a PostgreSQL database named `neptree`.
   - Update the `DATABASES` setting in `neptree_backend/settings.py` with your database credentials.

5. **Apply migrations and create a superuser:**

   ```bash
   python manage.py migrate
   python manage.py createsuperuser
   ```

6. **Run the development server:**

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd ../neptree-frontend
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

## Connecting Frontend and Backend

### CORS Configuration

1. **Install Django CORS headers:**

   ```bash
   pip install django-cors-headers
   ```

2. **Update `settings.py`:**

   ```python
   INSTALLED_APPS = [
       ...
       'corsheaders',
       ...
   ]

   MIDDLEWARE = [
       ...
       'corsheaders.middleware.CorsMiddleware',
       ...
   ]

   CORS_ALLOWED_ORIGINS = [
       "http://localhost:3000",  # React default development port
   ]
   ```

### Create Endpoints in Django

1. **Create Serializers, Views, and URLs:**

   **Product Serializer:**
   ```python
   # products/serializers.py
   from rest_framework import serializers
   from .models import Product

   class ProductSerializer(serializers.ModelSerializer):
       class Meta:
           model = Product
           fields = '__all__'
   ```

   **Product Views:**
   ```python
   # products/views.py
   from rest_framework import viewsets
   from .models import Product
   from .serializers import ProductSerializer

   class ProductViewSet(viewsets.ModelViewSet):
       queryset = Product.objects.all()
       serializer_class = ProductSerializer
   ```

   **Product URLs:**
   ```python
   # products/urls.py
   from django.urls import path, include
   from rest_framework.routers import DefaultRouter
   from .views import ProductViewSet

   router = DefaultRouter()
   router.register(r'products', ProductViewSet)

   urlpatterns = [
       path('', include(router.urls)),
   ]
   ```

   **Include Product URLs in Main URL Configuration:**
   ```python
   # neptree_backend/urls.py
   from django.contrib import admin
   from django.urls import path, include

   urlpatterns = [
       path('admin/', admin.site.urls),
       path('api/', include('products.urls')),
   ]
   ```

### Set Up Axios in React

1. **Install Axios:**

   ```bash
   npm install axios
   ```

2. **Create Axios Instance:**

   ```javascript
   // src/axiosInstance.js
   import axios from 'axios';

   const axiosInstance = axios.create({
       baseURL: 'http://127.0.0.1:8000/api/',
   });

   export default axiosInstance;
   ```

### Create React Components to Fetch Data

1. **Product List Component:**

   ```jsx
   // src/components/ProductList.js
   import React, { useEffect, useState } from 'react';
   import axiosInstance from '../axiosInstance';

   const ProductList = () => {
       const [products, setProducts] = useState([]);

       useEffect(() => {
           axiosInstance.get('products/')
               .then(response => setProducts(response.data))
               .catch(error => console.log(error));
       }, []);

       return (
           <div>
               {products.map(product => (
                   <div key={product.id}>
                       <h2>{product.name}</h2>
                       <p>{product.description}</p>
                       <p>{product.price}</p>
                   </div>
               ))}
           </div>
       );
   };

   export default ProductList;
   ```

2. **Use the ProductList Component in App.js:**

   ```jsx
   // src/App.js
   import React from 'react';
   import ProductList from './components/ProductList';

   function App() {
       return (
           <div className="App">
               <h1>Neptree Products</h1>
               <ProductList />
           </div>
       );
   }

   export default App;
   ```

## Usage

1. **Start Django server:**

   ```bash
   cd neptree-backend
   source venv/bin/activate  # Activate virtual environment
   python manage.py runserver
   ```

2. **Start React development server:**

   ```bash
   cd ../neptree-frontend
   npm start
   ```

3. **Open your browser and navigate to:**

   - React frontend: `http://localhost:3000/`
   - Django admin panel: `http://127.0.0.1:8000/admin/`

## Project Structure

```
neptree/
├── neptree-backend/
│   ├── manage.py
│   ├── neptree_backend/
│   ├── products/
│   ├── ...
├── neptree-frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── ...
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/bibeksah/NepTree-Project/blob/main/LICENSE.md) file for details.

---

This `README.md` file provides detailed instructions for setting up and running the Neptree super app project, including connecting the frontend and backend components.
