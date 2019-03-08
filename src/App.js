import React, { createContext } from 'react';

import ToggleButton from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();

const App = () => {
  // typical useState definition => React Hooks
  // const [value, setValue] = useState(initialState)
  const [name, setName] = useTitleInput('');

  return (
    <UserContext.Provider value={{ user: true }}>
      <div className="main-wrapper">
        <h1>Level Up Dishes</h1>
        <ToggleButton />

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
