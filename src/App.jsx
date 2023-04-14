import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routs } from './Routs/Routs';

const App = () => {
  return (
    <div>
      
      <RouterProvider router={routs}/>
    </div>
  );
};

export default App;
