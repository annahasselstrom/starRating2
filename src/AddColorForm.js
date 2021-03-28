//import React, { useRef } from 'react';
import React, { useState } from 'react';
import { useInput } from './hooks/useInput';

{/*
- txtTitle ref referar till text inputen
- hexColor ref används för att accessa hex färgvärden
  från HTML färg inputen
- vi sätter värdet på dessa refs direkt i JSX genom att använda
  ref-propertyn: <input ref
- detta gör att det skapas ett 'current field' på vårt ref objekt
  som refererar direkt till DOM-elementet
- detta ger oss access till DOM-elementet vilket gör att vi kan fånga 
  upp dess värde
- när user submittar formuläret genom att klicka på ADD, så kallar 
  vi på submit-funktionen 
- e.preventDefault() - hindrar defaulten: skickar POST request till aktuell URL
  med de värden som sparats i formuläret

- !! ett input-element i ett formulär, vars värde kontrolleras av React (setState) är en 
  controlled component. HTML form elements (select, input, textarea) hanterar by default sitt egna
  state = uncontrolled component

- vi spar current value från input refs till nya variabler
- dessa skickas upp till parent i funktionen onNewColor - skickas som 
  function arguments i funktionen 
- att resetta current.value är imperativ kod. AddColorForm är nu en uncontrolled component 
  eftersom den använder DOM för att spara form values.

CONTROLLED COMPONENT:
- React och inte DOM hanterar form values
- behöver inte refs eller imperativ kod
- lättare att validera

*/}

{/*}
CONTROLLED:
- setTitle, setColor: funktioner som kan ändra state - komponenten 
  kontrollerar värdet på title och color
- 'value' attribut = genom att sätta value={} i formuläret så kan värdet BARA
  ändras genom att ändra state variabeln
- vi displayar värdet för titel och color genom att sätta dom till value={title}
- 'event.target' = ger oss access till det nya värdet
- 'event.target' refererar till DOM-elementet - och därmed når vi nya värdet
- när 'title' ändras, så kallar vi på setTitle för att ändra värdet på title i state
- när det värdet ändras så re-rendrar komponenten och vi kan displaya nya värdet
- kontrollerade componenter re-rendrar ofta - t ex varje ny bokstav

ADD CUSTOM HOOK
- useState hook är inkapslad i useInput hook
- vi når title och color properties genom att destructurera dom från det första värdet
  i den array vi får tillbaka från useInput hooken - titleProps nedan
- det andra värdet resettar 'the value' property till initialt värde
- 'titleProps' och 'colorProps' är redo att spreadas in i respektive input element
- i första värdet - titleProps - finns även onChange-funktionen: onChange: e => setValue(e.target.value)
- både title och color inputsen får nu properties för deras värde och onChange events.
- i submit-funktionen hämtar vi in 'value' för både title och color från deras properties
- till sist: resetTitle('') och resetColor('')
- nu dags att spara de nya färgerna i state i App
*/}
export const AddColorForm = ({ onNewColor = f => f }) => {
    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('#000000');

    const submit = (e) => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
          <input
            {...titleProps}
            type="text"
            placeholder="color title..."
            required />
          <input
            {...colorProps}
            type="color"
            required />
          <button>
            ADD
          </button>
        </form>
    )
};

// Dessa rader byts ut i input:
// value={color} och value={title}
// onChange={event => setColor(event.target.value)}


{/*}
UNCONTROLLED!
export const AddColorForm = ({ onNewColor = f => f }) {
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        onNewColor(title, hexColor);
        txtTitle.current.value = '';
        hexColor.current.value = '';
    };

    return (
        <form onSubmit={submit}>
            <input
                ref={txtTitle}
                type="text"
                placeholder="color title..."
                required />
            <input
                ref={hexColor}
                type="color"
                required />
            <button>
                ADD
            </button>
        </form>
    )
};
*/}
