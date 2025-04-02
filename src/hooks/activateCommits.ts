import { useState } from 'react';

export const useToggle = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);
  
  const toggle = () => setIsVisible(!isVisible);
  const open = () => setIsVisible(true);
  const close = () => setIsVisible(false);

  return { isVisible, toggle, open, close };
};