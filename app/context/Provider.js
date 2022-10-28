// ./src/context/Provider.js
import React, { useState } from 'react';
import { Alert } from 'react-native';
import AppContext from './AppContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const [stateB, setStateB] = useState('initialStateB');
  //VARIAVEIS TELA LOGIN
  const [CODIGO_VENDEDOR, CAPTURA_CODIGO_VENDEDOR] = useState('');
  const [SENHA_VENDEDOR, CAPTURA_SENHA_VENDEDOR] = useState(0);
  // VARIAVEIS DE CONEXAO COM HOST
  const [PORTA, CAPTURA_PORTA] = useState(0);
  const [SERVIDOR, CAPTURA_SERVIDOR] = useState('');
  //VARIAVEIS MENU
  const [VENDEDOR, setVENDEDOR] = useState("Bruno");
  // VARIAIS TELA INVENTARIO
  const [COD_INVENTARIO, setCOD_INVENTARIO] = useState('');
  const [DESCRICAO_INVENTARIO, setDESCRICAO_INVENTARIO] = useState("");
  const [LOCALIZACAO_INVENTARIO, setLOCALIZACAO_INVENTARIO] = useState("");
  const [STATUS_INVENTARIO, setSTATUS_INVENTARIO] = useState("");
  const [TIPO_INVENTARIO, setTIPO_INVENTARIO] = useState("");
  const [UNIDADE_INVENTARIO, setUNIDADE_INVENTARIO] = useState("");
  const [ESTADO_ATUAL_INVENTARIO, setSTADO_ATUAL_INVENTARIO] = useState("");
  const [ESTADO_APURADO_INVENTARIO, setESTADO_APURADO_INVENTARIO] = useState("");

  const contextValue = {
    stateA, setStateA,
    stateB, setStateB,
    ////VARIAVEIS TELA LOGIN
    CODIGO_VENDEDOR, CAPTURA_CODIGO_VENDEDOR,
    SENHA_VENDEDOR, CAPTURA_SENHA_VENDEDOR,
    // VARIAVEIS DE CONEXAO COM HOST
    PORTA, CAPTURA_PORTA,
    SERVIDOR, CAPTURA_SERVIDOR,
    //VARIAVEIS MENU
    VENDEDOR, setVENDEDOR,
    // VARIAIS TELA INVENTARIO
    COD_INVENTARIO, setCOD_INVENTARIO,
    DESCRICAO_INVENTARIO, setDESCRICAO_INVENTARIO,
    LOCALIZACAO_INVENTARIO, setLOCALIZACAO_INVENTARIO,
    STATUS_INVENTARIO, setSTATUS_INVENTARIO,
    TIPO_INVENTARIO, setTIPO_INVENTARIO,
    UNIDADE_INVENTARIO, setUNIDADE_INVENTARIO,
    ESTADO_ATUAL_INVENTARIO, setSTADO_ATUAL_INVENTARIO,
    ESTADO_APURADO_INVENTARIO, setESTADO_APURADO_INVENTARIO
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;