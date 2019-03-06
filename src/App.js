import React, { useState } from 'react';
import ToggleButton from './Toggle';

const App = () => {
  // typical useState definition => React Hooks
  // const [value, setValue] = useState(initialState)
  const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <ToggleButton />
      <h3>{name}</h3>

      <form
        onSubmit={e => {
          e.preventDefault();
          formSubmit(name, setName);
        }}
      >
        <input
          type="text"
          name="myInput"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log(`email sent to ${value}!`);
  setValue('');
};

export default App;
