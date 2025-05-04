import React, { useState } from 'react';
import { CardContext } from './Contex';

const CardProvider = ({ children }) => {
  const [cart, setCart] = useState(false)
  return <CardContext.Provider value={{ cart, setCart }}>
    {children}
  </CardContext.Provider>

};

export default CardProvider;