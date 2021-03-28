import React from 'react';
import { FaStar } from 'react-icons/fa';


// renderar en individuell stjärna 
// använder property 'selected' för att fylla med korrekt färg
// om ingen selected property skickas in, fylls färgen med grå by default

// adderar onClick på varje stjärna
// const Star har nu en property 'onSelect' - som är en funktion
// vi kallar på funktionen genom att klicka på en stjärna
// f => f är en falsk funktion som inte gör något - vi behöver denna default
// funktion annars får vi fel när vi  klickar på FaStar-komponententen
// Detta eftersom onSelects värde MÅSTE vara en funktion
export const Star = ({
    selected = false,
    onSelect = f => f
}) => (
    <FaStar
        color={selected ? "red" : "pink"}
        onClick={onSelect}
    />
);
