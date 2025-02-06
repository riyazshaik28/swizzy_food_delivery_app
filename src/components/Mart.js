



const Mart = () => {
    const categories = [
      { id: 1, name: "Fruits & Vegetables" },
      { id: 2, name: "Dairy & Bakery" },
      { id: 3, name: "Snacks & Beverages" },
      { id: 4, name: "Staples & Groceries" },
      { id: 5, name: "Personal Care" },
    ];
  
    const products = [
        { id: 1, name: "Apple", price: "Rs.90", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsEtynE3S1m19klztdUc2XwrzkQAasL7_mw&s" },
        { id: 2, name: "Milk", price: "Rs.30", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nCDNtQIBOh7XPiD3NZxZuGiJHdAM6GEExg&s" },
        { id: 3, name: "Chips", price: "Rs.50", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8pkDfLBeh6zM0V2biRBfXbpkRur-UbUNsg&s" },
        { id: 4, name: "Rice", price: "Rs.250", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJEyN6ufo5A6OUjar1cEjRGZ-A3Gexehing&s" },
        { id: 5, name: "Shampoo", price: "Rs.20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHBxgPO1uaI-CLjpcLTi2eK5VOh0xIpr8Rg&s" },
        { id: 6, name: "Bread", price: "Rs.40", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGERtnntCuw-TxspHQrJP4i3G8vuL774JprA&s" },
        { id: 7, name: "Eggs (12 Pack)", price: "Rs.60", image: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg" },
        { id: 8, name: "Bananas", price: "Rs.50", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_HeZN-LCwwB_7BiGjN6Yem4V5StS9NYCrg&s" },
        
      ];
      
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
       
        <header className="bg-yellow-500 text-white p-4 rounded-md shadow-md mb-6">
          <h1 className="text-3xl font-bold text-center">InstaMart</h1>
          <p className="text-center mt-2 text-sm">
            Your one-stop shop for groceries and more, delivered in minutes!
          </p>
        </header>
  
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white p-4 shadow rounded-md w-52 h-24 flex items-center justify-center text-gray-700 text-lg font-semibold border border-gray-200 hover:bg-yellow-100 transition"
              >
                {category.name}
              </div>
            ))}
          </div>
        </section>
  
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Popular Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 shadow rounded-md border border-gray-200 hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-1">{product.price}</p>
                <button className="bg-yellow-500 text-white mt-4 px-4 py-2 rounded-md w-full font-medium hover:bg-yellow-600 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
export default Mart;
