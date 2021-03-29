import React from 'react';
import { useColors } from "./color-hooks";
import { Color } from './Color';

export const ColorList = () => {
  const { colors } = useColors();
    
  return (
    <div className="color-list">
      {
        colors.map(color => (
          <Color
            key={color.id}
            {...color}
          />)
        )
      }
    </div>
  );
};
