//import React, { useRef } from 'react';
import React, { useState } from 'react';
import { useInput } from './hooks';
import { useColors } from './color-hooks';
import { ColorProvider } from './color-hooks';

{/*
- e.preventDefault() - hindrar defaulten: skickar POST request till aktuell URL
  med de värden som sparats i formuläret
- !! ett input-element i ett formulär, vars värde kontrolleras av React (setState) är en 
  controlled component. HTML form elements (select, input, textarea) hanterar by default sitt egna
  state = uncontrolled component

CONTROLLED COMPONENT:
- React och inte DOM hanterar form values
- behöver inte refs eller imperativ kod
- lättare att validera
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
- useState hook är inkapslad i useInput hook i hook.js
- vi når title och color properties genom att destructurera dom från det första värdet
  i den array vi får tillbaka från useInput hooken - titleProps nedan
- det andra värdet resettar 'the value' property till initialt värde
- 'titleProps' och 'colorProps' är redo att spreadas in i respektive input element
- i första värdet - titleProps - finns även onChange-funktionen: onChange: e => setValue(e.target.value)
- både title och color inputsen får nu properties för deras värde och onChange events.
- i submit-funktionen hämtar vi in 'value' för både title och color från deras properties
- till sist: resetTitle('') och resetColor('')
*/}

export const AddColorForm = () => {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
  const { addColor } = useColors();

    const submit = (e) => {
      e.preventDefault();
      addColor(titleProps.value, colorProps.value);
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
            value="#ff0000"
            required />
          <button>
            ADD
          </button>
        </form>
    )
};
