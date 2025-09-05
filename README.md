# Swizzy Food Delivery App

A Swiggy-inspired food delivery application built with React, Redux Toolkit, and Tailwind CSS.  
This app allows users to browse restaurants, view menus, add items to the cart, and experience a smooth food-ordering interface with responsive design and offline support.

---

## **Installation & Setup**
1. **Create React App**  
   Create a new React app using the following command:
   ```bash
   npx create-react-app "name-of-the-folder"
Tailwind CSS Setup

## **Tailwind CSS Setup**
- Configured Tailwind CSS for styling and responsiveness.


---


## **Project Structure**

### **Header**
- Displays navigation elements (Home, About, Contact, Cart).

### **Routing**
- Setup React Router for navigation between different pages (Home, About, Contact, Cart, Restaurant Menu).

### **Body**
- Displays a list of restaurants with search and filter options.

### **Restaurant Menu**
- Dynamic menu page showing categories and dishes for each restaurant.

### **Cart**
- Allows users to add/remove items and view total items dynamically.

### **Footer**
- Displays footer information and branding.

### **Shimmer UI**
- Loading skeleton while fetching restaurant/menu data.

### **Custom Hooks**
- `useRestaurantMenu` → Fetches restaurant menu data.  
- `useOnlineStatus` → Detects whether the user is online or offline.

### **Context API**
- `UserContext` for managing user data across components.

### **Redux Store**
- `cartSlice` → Manages cart state.  
- `appStore` → Centralized store configuration.

### **Error Page**
- Custom error page for invalid routes.

---

## **Features**

### **Restaurant Browsing**
- Browse restaurants dynamically using API.  
- Search for restaurants by name.  
- Filter restaurants based on ratings.

### **Menu & Cart**
- View menu items for each restaurant.  
- Add/remove items from the cart.  
- Cart updates in real-time using Redux Toolkit.

### **User Handling**
- `UserContext` provides global user data.  
- Demonstrates both Functional and Class-based components.

### **UI Enhancements**
- Shimmer UI for better user experience during loading states.  
- Fully responsive design with Tailwind CSS.  
- Offline detection with an `offline.png` fallback image.

---

## **Tech Stack**
- **Frontend**: React, Tailwind CSS  
- **State Management**: Redux Toolkit  
- **Routing**: React Router  
- **Build Tool**: Create React App (CRA)

---

## **Live Demo**
You can access the live demo of the project [here](https://swiggyyriyaz.netlify.app/).

---

## **Contributing**
Feel free to fork the repository, submit issues, and open pull requests for improvements.  
Your contributions are welcome!


