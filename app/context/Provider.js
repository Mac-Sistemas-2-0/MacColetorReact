// ./src/context/Provider.js
import React, { useState } from 'react';
import { Alert } from 'react-native';
import AppContext from './AppContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const [stateB, setStateB] = useState('initialStateB');
  const [CODIGO_VENDEDOR, CAPTURA_CODIGO_VENDEDOR] = useState('');
  const [SENHA_VENDEDOR, CAPTURA_SENHA_VENDEDOR] = useState(0);
  const [PORTA, CAPTURA_PORTA] = useState(0);
  const [SERVIDOR, CAPTURA_SERVIDOR] = useState('');
  const [VENDEDOR, setVENDEDOR] = useState("Bruno")

  const contextValue = {
    stateA, setStateA,
    stateB, setStateB,
    CODIGO_VENDEDOR, CAPTURA_CODIGO_VENDEDOR,
    SENHA_VENDEDOR, CAPTURA_SENHA_VENDEDOR,
    PORTA, CAPTURA_PORTA,
    SERVIDOR, CAPTURA_SERVIDOR,
    VENDEDOR, setVENDEDOR
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;