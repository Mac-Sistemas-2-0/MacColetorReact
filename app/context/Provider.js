// ./src/context/Provider.js
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('oi');
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
  const [ESTADO_ATUAL_INVENTARIO, setESTADO_ATUAL_INVENTARIO] = useState("");
  const [ESTADO_APURADO_INVENTARIO, setESTADO_APURADO_INVENTARIO,] = useState("");
  //Consulta preco
  const [SECAO_CONSULTA_PRECO, set_SECAO_CONSULTA_PRECO] = useState("");
  const [GRUPO_CONSULTA_PRECO, set_GRUPO_CONSULTA_PRECO] = useState("");
  const [RESERVA_CONSULTA_PRECO, set_RESERVA_CONSULTA_PRECO] = useState("");
  const [PRECO_CONSULTA_PRECO, set_PRECO_CONSULTA_PRECO] = useState("");
  const [COPIAS_CONSULTA_PRECO, set_COPIAS_CONSULTA_PRECO] = useState("");
  // Solicitar Cotacao
  const [QUANTIDADE_SOLICITAR_COTACAO, set_QUANTIDADE_SOLICITAR_COTACAO] = useState("");

//*****************************************************************************************************************************************************************************************\\
//Requisições API
/* const conectApi = async (CODIGO_VENDEDOR, SENHA_VENDEDOR ) => {
  const urlAPI = `${SERVIDOR}:${PORTA}/coletor`
  const jsonLogin = {
    usuario: CODIGO_VENDEDOR,
    senha: SENHA_VENDEDOR,
    tipo: 'login'
  };
  try {
    return await fetch("http://192.168.1.14:9090/coletor", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        jsonLogin
      )
    })
    .then((res) => res.json())
    .then((json) => {
      return JSON.parse(json);
    })
  } catch (error) {
    console.error(error);
  }
  ;
} */

const conectApi = async () => {
  try {
   const response = await fetch('http://192.168.1.14:9090/coletor', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      usuario: CODIGO_VENDEDOR,
      senha: SENHA_VENDEDOR,
      tipo: 'login'
    })
  });
   const json = await response.json();
  setStateA(json.retorno);
 } catch (error) {
  setStateA.error(error);
 }
}


//*****************************************************************************************************************************************************************************************\\

  const contextValue = {
    conectApi,
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
    // VARIAVEIS TELA CONSULTA PRECO
    SECAO_CONSULTA_PRECO, set_SECAO_CONSULTA_PRECO,
    GRUPO_CONSULTA_PRECO, set_GRUPO_CONSULTA_PRECO,
    RESERVA_CONSULTA_PRECO, set_RESERVA_CONSULTA_PRECO,
    PRECO_CONSULTA_PRECO, set_PRECO_CONSULTA_PRECO,
    COPIAS_CONSULTA_PRECO, set_COPIAS_CONSULTA_PRECO,
    // VARIAVEIS TELA SOLICITAR COTACAO
    QUANTIDADE_SOLICITAR_COTACAO, set_QUANTIDADE_SOLICITAR_COTACAO,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;