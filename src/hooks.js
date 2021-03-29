import React, { useState } from 'react';

{/*
- vi skapar state genom att använda useState hook
- vi returnerar en array: 
- första värdet - 'value' och 'onChange-funktionen' - är de object som innehåller samma properties
  vi kanske frestades att copy/paste i AddColorForm 
- det andra värdet i arrayen är en funktion som re-settar 'value' tillbaka 
  till initialt värde

- använder vår custom hook - useInput - i AddColorFrom istället för dessa två rader:
  value={title}
  onChange={event => setTitle(event.target.value)}

*/}

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        { value, onChange: e => setValue(e.target.value) },
        () => setValue(initialValue)
    ];
};