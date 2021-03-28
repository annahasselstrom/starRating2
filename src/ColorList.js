import React, { useContext } from 'react';
import { ColorContext } from './';
import { Color } from './Color';

{/*
- ColorList tar emot colors som props från App.js
- Om arrayen är tom kommer komponenten displaya ett meddelande
- Om vi har färger i arrayen, då mappar vi över arrayen och skickar
- in varje färgs detaljer längre ner i trädet till Color-komponenten,
- som är nästlad i ColorList
- ...color låter oss accessa hela color-objektet: id, title, color, rating

- ColorList har inte heller state. Kan inte removeColor utan skickar den 
- vidare upp till sin parent - App.js
- den gör detta genom att lägga till en props: onRemoveColor som är en funktion
- om Color kallar på onRemove-propsen, så kommer ColorList i sin tur att kalla på
- onRemoveColor-propsen och skicka ansvaret upp till App.js
- id måste med

Addera onRate:
- vi hämtar in the onRate event från Color
- skickar upp detta till ColorLists parent (App) via the onRateColor
  funktion propertyn
*/}
export const ColorList = () => {
  const { colors } = useContext(ColorContext);
    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
    //console.log(colors)
    
    return (
      <div className="color-list">
        {
          colors.map(color => <Color key={color.id} {...color} />)
        }
      </div>
    )
};