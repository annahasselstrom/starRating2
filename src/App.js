import React from 'react';
import { ColorList } from './ColorList.js';
import { AddColorForm } from 'AddColorForm';

import { Checkbox } from './sandboxHooks/hooks';

export const App = () => {

  return (
    <>
      <Checkbox />
      <AddColorForm />
      <ColorList />
    </>
  )
};

