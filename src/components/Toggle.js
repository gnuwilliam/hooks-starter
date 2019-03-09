import React, { useState } from 'react';

import DishForm from './DishForm';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <DishForm />}
    </div>
  );
};

export default Toggle;
