import React from 'react';
import GrandChild from './GrandChild';

const child = () => {
  return (
    <div>
      <h1>Child</h1>
      <GrandChild />
    </div>
  );
};

export default child;
