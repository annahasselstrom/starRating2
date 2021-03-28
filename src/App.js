import React, { useState } from 'react';
<<<<<<< HEAD
import colorData from './colorData.json';
import { ColorList } from './ColorList.js';
import { AddColorForm } from 'AddColorForm';
import { v4 } from 'uuid';
=======
//import colorData from './colorData.json';
import { ColorList } from './ColorList.js';
import { AddColorForm } from 'AddColorForm';
//import { v4 } from 'uuid';
>>>>>>> eb15521e4db6f5d164a09b7da8f25589ee58d71c

  {/*}
  - colorData = json-arrayen
  - vi initialiserar objektet colors med array-datan genom att set state med useState
  - och skickar in json-arrayen som argument/värde
  - från App skickar vi ner objektet colors som är en array till komponenten ColorList

  - App hanterar state och det är här vi kan fånga upp id och deleta item från state
  - vi lägger till en variabel för setColors - som är en funktion som tillåter oss att 
    ändra state
  - när ColorList skickar upp ett onRemoveColor-event, så fångar vi upp id och använder
    id för att filtrera över listan med färger, och returnera en ny array utan aktuellt id
  - sen ändrar vi state - setColors(newColors)
  - newColors är den nya arrayen utan deletad färg
  - när vi ändrar colors state så renderas App med den nya listan färger
  - de nya färgerna skickas in till ColorList som också renderas med de aktuella färgerna

Add onRate event:
- har nu skickats från Star, StarRating, Color, ColorList till App
- här hanterar vi state och kan spara den nya ratingen
- onRateColor har id och rating som värde
- vi skapar en ny variable - newColors som blir det värde vi uppdaterar colors-arrayen i 
  databasen med
- i newColors mappar vi colors-arrayen och söker efter en färg med ett visst id
- finns id: ändra rating i det individuella färgobjektet
- finns inte id: ?? gör vi inget?

- vi skickar newColors in i setColors-funktionen och då ändras state of colors och
  App körs med ett nytt värde för colors array
- så snart vår colors array har ändrats, så renderas UI-trädet med den nya datan
- den nya ratingen reflekteras tillbaka till user via röda stjärnor

ADDERA FÄRGER TILL STATE
- när 'onNewColor'-propertyn kallas på, så sparas den nya färgen i state - setColors
- onNewColor skickas ner till AddColorForm och förväntar sig två args tillbaka: (title, color)
- skickas tillbaka med title-värde och 
- färg-värde
- när en ny färg adderas, så kallar vi på onNewColor property
- 'title' och 'hexadecimal value' för den nya färgen skickas in i funktionen som argument
- vi använder dessa argument för att skapa en ny color array - const newColors []
- först så spreader vi befintliga 'colors' från state till den nya arrayen: ...colors
- sen adderar vi ett helt nytt color object (med fyra properties) genom att använda 'title' och 'color' values
- vi sätter rating = 0 eftersom den inte är ratad ännu
- v4 uuid för id
- när vi har en array med vår nya färg så spar vi den till state genom setColors(newColors)
- detta för att App renderar och UI visar ny färg i listan
*/}
  
  
export const App = () => {
<<<<<<< HEAD
  const [colors, setColors] = useState(colorData);

  return (
    <div>
      <AddColorForm
=======
  //const [colors, setColors] = useState(colorData);

  return (
    <div>
      <AddColorForm />
        {/*
>>>>>>> eb15521e4db6f5d164a09b7da8f25589ee58d71c
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ];
          setColors(newColors);
        }}
<<<<<<< HEAD
        />
      <ColorList
=======
      */}
       
      <ColorList />
        {/*
>>>>>>> eb15521e4db6f5d164a09b7da8f25589ee58d71c
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
<<<<<<< HEAD
      />
=======
      */}
>>>>>>> eb15521e4db6f5d164a09b7da8f25589ee58d71c
    </div>
  )
};
