import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [menuItems] = useState([
    {
      id: 1,
      name: 'Burger',
      description: 'Delicious burger with cheese and veggies',
      price: 300,
      image: 'images/burger.jpg',
    },
    {
      id: 2,
      name: 'Pizza',
      description: 'Classic pizza with tomato sauce and toppings',
      price: 890,
      image: 'images/pizza.jpg',
    },
    {
      id: 3,
      name: 'Salad',
      description: 'Fresh salad with mixed greens and dressing',
      price: 360,
      image: 'images/salad.jpg',
    },
    
    {
      id: 4,
      name: 'Pasta',
      description: 'Homemade pasta with creamy sauce',
      price: 430,
      image: 'images/pasta.jpg',
    },
    {
      id: 5,
      name: 'Steak',
      description: 'Tender steak with mashed potatoes and vegetables',
      price: 3900,
      image: 'images/steak.jpg',
    },
    {
      id: 6,
      name: 'Sushi',
      description: 'Assorted sushi rolls with soy sauce',
      price: 280,
      image: 'images/sushi.jpg',
    },
    {
      id: 7,
      name: 'Soup',
      description: 'Hot and comforting soup of the day',
      price: 300,
      image: 'images/soup.jpg',
    },
    {
      id: 8,
      name: 'Sandwich',
      description: 'Classic sandwich with ham, cheese, and veggies',
      price: 180,
      image: 'images/sandwich.jpg',
    },
    {
      id: 9,
      name: 'Fish and Chips',
      description: 'Crispy fish and chips with tartar sauce',
      price: 1400,
      image: 'images/fish-and-chips.jpg',
    },
    {
      id: 10,
      name: 'Dessert',
      description: 'Decadent chocolate cake with ice cream',
      price: 690,
      image: 'images/dessert.jpg',
    },
  ]);

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (itemId) => {
    const itemToAdd = menuItems.find((item) => item.id === itemId);
    setFavorites([...favorites, itemToAdd]);
  };

  const removeFromFavorites = (itemId) => {
    const updatedFavorites = favorites.filter((item) => item.id !== itemId);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="container">
      <h2>Menu</h2>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="dish-item">
            <div className="dish-image-container">
              <img src={item.image} alt={item.name} className="dish-image" />
            </div>
            <div className="dish-info">
              <h3 className="dish-name">{item.name}</h3>
              <p className="dish-description">{item.description}</p>
              <p className="dish-price">{item.price} c.</p>
              <button className="add-button" onClick={() => addToFavorites(item.id)}>
                Add to Favorites
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites selected</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((item) => (
            <li key={item.id} className="favorites-item">
              <div className="favorites-image-container">
                <img src={item.image} alt={item.name} className="favorites-image" />
              </div>
              <div className="favorites-info">
                <h3 className="favorites-name">{item.name}</h3>
                <p className="favorites-description">{item.description}</p>
                <p className="favorites-price">{item.price} с.</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromFavorites(item.id)}
                >
                  Remove from Favorites
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

