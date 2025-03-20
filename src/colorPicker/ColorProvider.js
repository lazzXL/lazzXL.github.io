import { useState } from 'react';
import { ColorContext } from './colorContext';
import { colors } from './colorConstants';

export const ColorProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(() => {
    const savedColor = localStorage.getItem('themeColor');
    return savedColor || 'purple';
  });

  const value = {
    themeColor: colors[themeColor],
    colors,
    setThemeColor: (color) => {
      localStorage.setItem('themeColor', color);
      setThemeColor(color);
    },
    availableColors: Object.keys(colors)
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

export default ColorProvider;