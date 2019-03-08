import React, { useState, useContext } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled && <h2>Hello!</h2>}
    </div>
  );
};

export default ToggleButton;
