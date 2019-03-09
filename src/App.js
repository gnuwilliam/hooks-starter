import React, { useState, useEffect } from 'react';

import Toggle from './components/Toggle';

const App = () => {
  // typical useState definition => React Hooks
  // const [value, setValue] = useState(initialState)
  const [loading, setLoading] = useState(true);
  const [dishes, setDishes] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
    );
    const data = await res.json();

    setDishes(data);
    setLoading(false);
  };

  // empty array tells React to run it only on mount
  // pretty much becomes componentDidMount()
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />

      {dishes.map(dish => (
        <article className="dish-card dish-card--withImage" key={dish.name}>
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map(ingredient => (
              <span key={ingredient}>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default App;
