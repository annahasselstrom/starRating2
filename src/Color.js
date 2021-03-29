import React from 'react';
import { StarRating } from './StarRating';
import { FaTrash } from 'react-icons/fa';
import { useColors } from "./color-hooks";

{/*
- Color förväntar sig tre properties: title, color och rating
- dessa skickades ner till Color med hjälp av spread: ...color i returen 
- i ColorList. I nästlade Color.
- propen color renderas som backgroundColor
- rating skickas in längre ner i trädet till StarRating-komponenten

- remove: vi lägger till id och en onRemove-funktion som props
- wrappar soptunne-ikonen i en button som kallar på onRemove och 
- skickar in id som värde i funktionen 
- när vi klickar på remove så kallar vi på removeColor som deklareras i
  ColorList.js och skickar in id.
- Color är fortfarande en pure component - har ingen state, återanvändas,
- skickar bara vidare info till parent som nu får ansvara för eventet 
- ColorList är Colors parent

Add onRate:
- vi hämtar ratingen från onRate handlern vi la till i StarRating.
- vi skickar in denna nya rating med id på den färg som ska ratas: => onRate(id, rating),
  som skickas upp till Colors parent (ColorList) - via en annan onRate funktion property

*/}


export const Color = ({
    id,
    title,
    color,
    rating,
}) => {
    const { rateColor, removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>X</button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={rating => rateColor(id, rating)}
            />
        </section>

    )
};