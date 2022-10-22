// ./src/context/Provider.js
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const [stateB, setStateB] = useState('initialStateB');
  const [CODIGO_VENDEDOR, CAPTURA_CODIGO_VENDEDOR] = useState(null);
  const [SENHA_VENDEDOR, CAPTURA_SENHA_VENDEDOR] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDisplay, setModalDisplay] = useState("none");
  const [modalDisplayView, setModalDisplayView] = useState("flex");
  const [PORTA, CAPTURA_PORTA] = useState(null);
  const [SERVIDOR, CAPTURA_SERVIDOR] = useState(null);

  const contextValue = {
    stateA, setStateA,
    stateB, setStateB,
    CODIGO_VENDEDOR, CAPTURA_CODIGO_VENDEDOR,
    SENHA_VENDEDOR, CAPTURA_SENHA_VENDEDOR,
    modalVisible, setModalVisible,
    modalDisplay, setModalDisplay,
    modalDisplayView, setModalDisplayView,
    PORTA, CAPTURA_PORTA,
    SERVIDOR, CAPTURA_SERVIDOR
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;