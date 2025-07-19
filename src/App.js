import React from "react";

function App() {
  const dishes = [
    { name: "Margherita Pizza", image: "🍕", price: "$12" },
    { name: "Veggie Burger", image: "🍔", price: "$10" },
    { name: "Sushi Roll", image: "🍣", price: "$15" },
    { name: "Pasta Alfredo", image: "🍝", price: "$13" },
    { name: "Ice Cream", image: "🍨", price: "$6" },
  ];

  return (
    <div className="min-h-screen bg-yellow-50 font-sans">
      <header className="bg-red-500 text-white p-6 text-center shadow-md">
        <h1 className="text-4xl font-bold">🍽️ Foodie's Heaven</h1>
        <p className="mt-2 text-lg">Delicious food delivered to your door</p>
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Top Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
            >
              <div className="text-6xl mb-4 text-center">{dish.image}</div>
              <h3 className="text-xl font-semibold">{dish.name}</h3>
              <p className="text-gray-600 mt-2">{dish.price}</p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-red-500 text-white text-center p-4 mt-8">
        © 2025 Foodie's Heaven — Made with ❤️
      </footer>
    </div>
  );
}

export default App;
