import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Biryani 🍛', price: 345, quantity: 2 },
    { id: 2, name: 'Tandoori Roti 🍞', price: 50, quantity: 1 },
    { id: 3, name: 'Pizza 🍕', price: 120, quantity: 1 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        item.quantity = newQuantity;
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Your Cart 🛒</h2>

      
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg shadow-md hover:scale-105 transition transform"
            >
              <div className="flex items-center space-x-4">
               
                <div className="text-lg font-medium text-gray-800">{item.name}</div>
                <div className="text-gray-500">(₹{item.price.toFixed(2)})</div>
              </div>

              <div className="flex items-center space-x-4">
            
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
                >
                  -
                </button>
               
                <div>{item.quantity}</div>
         
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between text-xl font-semibold text-gray-800">
          <span>Total:</span>
          <span>₹{calculateTotal().toFixed(2)}</span>
        </div>

        <div className="mt-6">
          <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
            Proceed to Payment 💳
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
