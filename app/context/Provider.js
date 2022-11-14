// ./src/context/Provider.js
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('oi');
  const [stateB, setStateB] = useState('initialStateB');
  //VARIAVEIS TELA LOGIN
  const [CODIGO_VENDEDOR, CAPTURA_CODIGO_VENDEDOR] = useState('');
  const [SENHA_VENDEDOR, CAPTURA_SENHA_VENDEDOR] = useState('');
  // VARIAVEIS DE CONEXAO COM HOST
  const [PORTA, CAPTURA_PORTA] = useState(0);
  const [SERVIDOR, CAPTURA_SERVIDOR] = useState('');
  //VARIAVEIS MENU
  const [VENDEDOR, setVENDEDOR] = useState("Bruno");
  // VARIAIS TELA INVENTARIO
  const [COD_INVENTARIO, setCOD_INVENTARIO] = useState('');
  const [DESCRICAO_INVENTARIO, setDESCRICAO_INVENTARIO] = useState("");
  const [LOCALIZACAO_INVENTARIO, setLOCALIZACAO_INVENTARIO] = useState("");
  const [STATUS_INVENTARIO, setSTATUS_INVENTARIO] = useState(
    [
      {label: 'ATIVO', value: '1'},
      {label: 'DESATIVAR', value: '2'}
    ]
  );
  const [TIPO_INVENTARIO, setTIPO_INVENTARIO] = useState(
    [
      {label: 'PARCIAL', value: '1'},
      {label: 'TOTAL', value: '2'}
    ]
  );
  const [UNIDADE_INVENTARIO, setUNIDADE_INVENTARIO] = useState("");
  const [ESTADO_ATUAL_INVENTARIO, setESTADO_ATUAL_INVENTARIO] = useState("");
  const [ESTADO_APURADO_INVENTARIO, setESTADO_APURADO_INVENTARIO,] = useState("");
  //Consulta preco
  const [SECAO_CONSULTA_PRECO, set_SECAO_CONSULTA_PRECO] = useState("");
  const [GRUPO_CONSULTA_PRECO, set_GRUPO_CONSULTA_PRECO] = useState("");
  const [RESERVA_CONSULTA_PRECO, set_RESERVA_CONSULTA_PRECO] = useState("");
  const [PRECO_CONSULTA_PRECO, set_PRECO_CONSULTA_PRECO] = useState("");
  const [COPIAS_CONSULTA_PRECO, set_COPIAS_CONSULTA_PRECO] = useState("");
  const [ValueStatus, setValueStatus] = useState('ATIVO');
  const [valueTipo, setValueTipo] = useState('');
  // Solicitar Cotacao
  const [QUANTIDADE_SOLICITAR_COTACAO, set_QUANTIDADE_SOLICITAR_COTACAO] = useState("");
  // Recarregar
  const [display, setDISPLAY] = useState(false)

//*****************************************************************************************************************************************************************************************\\
//*****************************************************************************************************************************************************************************************\\

  const contextValue = {
    stateA, setStateA,
    stateB, setStateB,
    ////VARIAVEIS TELA LOGIN
    CODIGO_VENDEDOR, CAPTURA_CODIGO_VENDEDOR,
    SENHA_VENDEDOR, CAPTURA_SENHA_VENDEDOR,
    // VARIAVEIS DE CONEXAO COM HOST
    PORTA, CAPTURA_PORTA,
    SERVIDOR, CAPTURA_SERVIDOR,
    //VARIAVEIS TELA MENU
    VENDEDOR, setVENDEDOR,
    // VARIAVEIS TELA INVENTARIO
    COD_INVENTARIO, setCOD_INVENTARIO,
    DESCRICAO_INVENTARIO, setDESCRICAO_INVENTARIO,
    LOCALIZACAO_INVENTARIO, setLOCALIZACAO_INVENTARIO,
    STATUS_INVENTARIO, setSTATUS_INVENTARIO,
    TIPO_INVENTARIO, setTIPO_INVENTARIO,
    UNIDADE_INVENTARIO, setUNIDADE_INVENTARIO,
    ESTADO_ATUAL_INVENTARIO, setESTADO_ATUAL_INVENTARIO,
    ESTADO_APURADO_INVENTARIO, setESTADO_APURADO_INVENTARIO,
    ValueStatus, setValueStatus,
    valueTipo, setValueTipo,
    // VARIAVEIS TELA CONSULTA PRECO
    SECAO_CONSULTA_PRECO, set_SECAO_CONSULTA_PRECO,
    GRUPO_CONSULTA_PRECO, set_GRUPO_CONSULTA_PRECO,
    RESERVA_CONSULTA_PRECO, set_RESERVA_CONSULTA_PRECO,
    PRECO_CONSULTA_PRECO, set_PRECO_CONSULTA_PRECO,
    COPIAS_CONSULTA_PRECO, set_COPIAS_CONSULTA_PRECO,
    // VARIAVEIS TELA SOLICITAR COTACAO
    QUANTIDADE_SOLICITAR_COTACAO, set_QUANTIDADE_SOLICITAR_COTACAO,
    display, setDISPLAY
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;