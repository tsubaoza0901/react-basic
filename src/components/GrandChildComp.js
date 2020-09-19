import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const GrandChildComp = () => {
  const { dispatchProvided } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => dispatchProvided('add_1')}>Add + 1</button>
    </div>
  );
};

export default GrandChildComp;
