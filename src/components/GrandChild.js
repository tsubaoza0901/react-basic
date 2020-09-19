import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const GrandChild = () => {
  const value = useContext(AppContext);

  return (
    <div>
      <h1>GrandChild</h1>
      <h3>{value}</h3>
    </div>
  );
};

export default GrandChild;
