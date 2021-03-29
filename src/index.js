import React from 'react'
import { ColorProvider } from "./color-hooks";
import { App } from './App'
//import { ReactDOM } from 'react-dom';
//import colors from './color-data';
import { render } from 'react-dom';
//console.log(colors)

{/*
CONTEXT
- context, context provider, context consumer
- gör det möjligt att skicka props upp och ner utan att det måste 
  passera alla komponenter
- en context-provider är en React komponent vi kan wrappa runt ett helt
  eller delar av ett komponent-träd
- vi kan använda flera context providers - används t ex i många npm-packages
- provider - där datan lämnar ifrån
- consumer - där datan landar, tar datan från context
- vi sparar fortfarande datan på en enda plats 

- createContext() innehåller Provider och Consumer
- vi sätter ColorContext i index.js - entry point av vår app
- vi ska ha vår färgdata här
- Provider: sätter state på färgerna
- vi adderar data till context genom att sätta Providers 'value propety'
  ({ colors })
- nu är färg-arrayen - colors - tillgänglig för alla context consumers
  som finns i komponentträdet
- vi exportear ColorContext härifrån för att vi kommer behöva accessa
  denna ColorContext.Consumer när vi vill komma åt färger
- Provider är nu Apps parent. App behöver inte hålla state längre
- Provider providar komponenter med det de behöver
- ColorList som är Apps barn kan hämta färger direkt från Providern
*/}

//export const ColorContext = createContext();

render(
  <ColorProvider >
    <App />
  </ColorProvider>,

  document.getElementById("root")
);

//console.log(colorsData)

//ReactDOM.render(<App />, document.getElementById('root'))
