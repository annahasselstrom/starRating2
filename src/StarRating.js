import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Star } from './Star';

// det utkommenterade hörde till StarRating innan ColorOrganizer adderades
// vi vill styra hur många stjärnor som ska finnas
// därför lägger vi till en createArray funktion för att skapa en ny array
// och vi talar om hur lång vi vill att den nya arrayen ska vara - med hjälp av
// propertyn 'totalStars' = 5
// sen mappar vi över vår array med 5 items och renderar dessa
// modifiera hela containern = ...style - spread samlar ihop och plockar ner styling (blå bakgrund) från App.js - <StarRating />
// addera method till hela containern = ...props - samlar ihop och plockar ner alla props (onDoubleClick) från App.js - <StarRating />

// tar bort setState och onClicken eftersom rating nu kommer från data.json
// lägger till selectedStars = 0 eftersom selectedStars nu hämtas från data.json och
// renderas i StarRating som är nästlad i Color

{/* Add onRate event
- hämta ny rating från den individuella stjärnan som blev klickad
- skickar in det värdet till StarRatings parent: Color
*/}
const createArray = length => [...Array(length)];

export const StarRating = ({
    style = {},
    totalStars = 5,
    selectedStars = 0,
    onRate = f => f,
    ...props }) => {
    
    //const [selectedStars, setSelectedStars] = useState(0);
    //const totalStars = 5;

    return [
        <div style={{ margin: "20px", padding: "5px", ...style }} {...props}>
            
            <div>
                {createArray(totalStars).map((star, index) => (
                    <Star
                        key={index}
                        selected={selectedStars > index}
                        onSelect={() => onRate(index + 1)}
                        //onSelect={() => setSelectedStars(index + 1)}
                />
                ))}
                <p>
                    {selectedStars} of {totalStars} stars
                </p>
            </div>
        </div>
    ];

    
};

{/*
- StarRating-komponenten renderas om varje gång en stjärna klickas på
- vid stjärn-klick: vi kallar på onSelect-propertyn (som är en funktion)
- när vi kallar på onSelect-funktionen så kallar vi också på setSelectedStars-funktionen,
  och skickar in antalet stjärnor som klickades på
- vi använder index variabeln från map-funktinen för att räkna ut antal stjärnor
- när map-funktionen renderar den första Star, är värdet på index = 0, och
  därför måste vi addera +1 för att få rätt värde/antal stjärnor
- när setSelectedStars körs, så skickas värdet från selectedStars in i 
- StarRating-komponenten 

*/}
