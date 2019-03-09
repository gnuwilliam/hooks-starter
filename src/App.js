import React, { createContext, useMemo } from 'react';

import ToggleButton from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';
import Counter from './Counter';

export const UserContext = createContext();

const App = () => {
  // typical useState definition => React Hooks
  // const [value, setValue] = useState(initialState)
  const [name, setName] = useTitleInput('');

  const reverseWord = word => {
    console.log('function called');
    return word
      .split('')
      .reverse()
      .join('');
  };

  const title = 'Level Up Dishes';
  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <UserContext.Provider value={{ user: true }}>
      <div className="main-wrapper">
        <h1>{TitleReversed}</h1>
        <ToggleButton />

        <Counter />

        <form
          onSubmit={e => {
            e.preventDefault();
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
    </UserContext.Provider>
  );
};

export default App;
