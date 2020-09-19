import React from 'react';
import GrandChildComp from './GrandChildComp';

const ChildComp = () => {
  return (
    <div>
      <GrandChildComp />
    </div>
  );
};

export default ChildComp;
