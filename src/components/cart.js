import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart?.items || []);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 transition-transform transform hover:scale-[1.01] duration-200 ease-in-out">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center flex items-center justify-center gap-3">
          <FaShoppingCart className="text-blue-600 animate-bounce" />
          Your Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="space-y-6">
            <div>
              <ItemList items={cartItems} />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center border-t pt-6 gap-4">
              <span className="text-lg font-medium text-gray-700">
                🧾 Total Items:{" "}
                <span className="font-bold text-blue-800">{cartItems.length}</span>
              </span>

              <button
                onClick={handleClearCart}
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-colors text-white px-6 py-2 rounded-full shadow-lg font-semibold"
              >
                <FaTrashAlt />
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500 text-xl animate-pulse">
            Your cart is currently empty 🛍️<br />
            <span className="text-sm mt-2 block">Start adding items to see them here.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
