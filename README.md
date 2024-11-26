***********************************
# Xkool eShop

## Overview
Xkool eShop is an online platform designed for students and parents/guardians to purchase extra classes. The application provides a user-friendly interface to browse available programs, manage a shopping cart, and complete the checkout process.

## Features
- **Program Browsing**: Users can view a list of available programs with details such as title, description, price, and available spaces.
- **Search and Filter**: Users can search for specific programs and filter results by category (e.g., Sports, Music, Arts, Education).
- **Sorting Options**: Users can sort the program list by name, price, or rating in ascending or descending order.
- **Shopping Cart**: Users can add or remove programs to/from their cart and view a summary of their selected items.
- **Checkout Process**: Users can provide their details (name, phone, address, city) and place an order.
- **Responsive Design**: The application is designed to be responsive and works well on various devices.

## Technologies Used
- **Frontend**: Vue.js for reactive UI components.
- **Backend**: RESTful API (hosted at `https://xkool-eshop-backend.onrender.com`) for handling program data and order processing.
- **Styling**: CSS for layout and design, with Font Awesome for icons.

## Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, etc.)
- Internet connection to access the backend API.

### Installation
1. Clone the repository:
   >bash code
   ```
   git clone https://github.com/yourusername/Xkool-eShop.git
   ```
2. Navigate to the project directory:
    >bash code
    ```
    cd Xkool-eShop
    ```
3. Open index.html in your preferred web browser.

### File Structure
    Xkool-eShop/
    │
    ├── README.md                # Project documentation
    ├── index.html               # Main HTML file
    ├── Scripts/                 # Directory containing JavaScript files
    │   └── script.js            # Vue.js application logic
    └── Styles/                  # Directory containing CSS files
        └── styles.css           # Styling for the application

## Usage

### Hosted App
* This is implementation is hosted to a github page corresponding to this repository
    [Link to the Hosted App](https://edwinabdonshayo.github.io/Xkool-eShop)
* The application backend is hosted on a github repository at: 
    [Link to the Github Backend](https://github.com/edwinabdonshayo/Xkool-eShop-Backend)

### Actions on the App
1. **Browse Programs**: Upon loading the application, users can view all available programs.
2. **Search for Programs**: Use the search bar to find specific programs by name.
3. **Filter Programs**: Select a category from the dropdown to filter the displayed programs.
4. **Sort Programs**: Choose a sorting option to reorder the program list.
5. **Add to Cart**: Click the "Enroll" button to add a program to your cart.
6. **View Cart**: Click on the cart button to view selected programs and proceed to checkout.
7. **Checkout**: Fill in the required details and click the "Checkout" button to place your order.


## Code Explanation
### Vue Instance
The application is built using Vue.js, where the main Vue instance is defined in `script.js`. Key properties and methods include:

- **Data Properties**:

    - `appUrl`: Base URL for API requests.
    - `cart`: Array to hold items added to the cart.
    - `programs`: Array to store available programs fetched from the backend.
    - `order`: Object to hold user details for the checkout process.

- **Methods**:

    - `addItemtoCart(program)`: Adds a selected program to the cart.
    - `removeFromCart(program)`: Removes a program from the cart.
    - `submitCheckOut()`: Validates user input and sends order data to the backend.
### API Integration
The application interacts with a backend API to fetch program data and submit orders. Key API endpoints include:

- `GET /programs`: Fetches the list of available programs.
- `POST /orders`: Submits an order with user details and cart items.
- `PUT /programs/{id}`: Updates the available spaces for a specific program after an order is placed.


### Acknowledgments
Vue.js for providing a powerful framework for building interactive user interfaces.
Font Awesome for the icon library used in the application.

*****************************************