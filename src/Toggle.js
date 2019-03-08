import React, { useState, useContext } from 'react';

import { UserContext } from './App';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const userInfo = useContext(UserContext);
  if (!userInfo.user) return null;

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled && <h2>Hello!</h2>}
    </div>
  );
};

export default ToggleButton;
