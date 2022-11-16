import React, { useContext } from "react";
import {
  BackHandler,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppContext from "../context/AppContext";

function btnFechaApp() {
  const navigate = useNavigation()

  const {
    CODIGO_VENDEDOR,
    SENHA_VENDEDOR,
    setCOD_INVENTARIO, COD_INVENTARIO,
    setDESCRICAO_INVENTARIO, DESCRICAO_INVENTARIO,
    setESTADO_ATUAL_INVENTARIO, ESTADO_ATUAL_INVENTARIO,
    ESTADO_APURADO_INVENTARIO, setESTADO_APURADO_INVENTARIO,
    PORTA, 
    SERVIDOR,
    display, setDISPLAY,
    paginacao, setPaginacao
  } = useContext(AppContext);

//***********************************************************************************//
//***********************************************************************************//
//==================> Função para GERAR CODIGO - Bruno Faria <======================//
//**********************************************************************************//
const cadastraProduto = async () => {
  console.log('___________________________________________________________________');
  console.log('<========> Função cadastraProduto - Página btnCadastrar <=========>');
//***********************************************************************************//
// Função [ navigate.reset() ] implementada no inicio da função pois o contextoAPI so altera o valor
// do estado global na renderização da tela, então na chamada da função ele renderiza 
// novamente a tela para atualizar os estados globais para usar as informações atribuidas
// aos campos.
//***********************************************************************************//
  navigate.reset({
    index: 0,
    routes: [{ name: paginacao }],
  });
  console.log('Linha: 45 | Paginação: '+ paginacao);
//------------------------------------------------------------------------------------\\
  setDISPLAY(true);
  const montaUrl = `http://${SERVIDOR}:${PORTA}/coletor`;
  try {
    //============* Validação de informações de HOST e codigo do produto! *============//
    if(SERVIDOR === '' | PORTA === '') {
      setDISPLAY(false);
      Alert.alert('Inclua informações do Servidor!')
    } else if (COD_INVENTARIO === '' | COD_INVENTARIO === undefined) {
      setDISPLAY(false);
      Alert.alert('Informe o código do produto!')
    } else if(DESCRICAO_INVENTARIO === '') {
      setDISPLAY(false);
      Alert.alert('Informe o nome do produto!')
    } else if(ESTADO_APURADO_INVENTARIO === '') {
      setDISPLAY(false);
      Alert.alert('Informe a quantidade de produtos!')
    } else {
      //============* Chama da API com os parametros requisitados! *============//
      const response = await fetch(montaUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usuario: CODIGO_VENDEDOR.toUpperCase(),
          senha: SENHA_VENDEDOR,
          tipo: 'cotacao',
          item: [{
            codigo: COD_INVENTARIO,
            desc: DESCRICAO_INVENTARIO,
            qtd: ESTADO_APURADO_INVENTARIO
          }]
        })
      },
      );
      const json = await response.json();
//====================================================================================//
//======================* Verificação de URL e json Enviado! *==========================//
      console.log('Linha: 72 | MontaUrl: ' + JSON.stringify(montaUrl));
      console.log('Linha: 93 | Retorno da Api: ' + JSON.stringify(json));
      console.log('Linha: 93 | Retorno da Api: ' + JSON.stringify(ESTADO_APURADO_INVENTARIO));
//====================================================================================//
//========================* Tratamento de retornos da API! *============================//
      if(json.retorno === 'Produto já cadastrado para esta cotação!') {
        Alert.alert('Produto já cadastrado para esta cotação!')
        setDISPLAY(false);
      } else if(json.retorno === 'Produto cadastrado') {
        Alert.alert('Produto cadastrado com sucesso!')
        setDISPLAY(false);
      } 
    }
  }
  catch (error) {
    setDISPLAY(false);
    if(toString(error).includes('failed', -1)) {
      console.log(`Linha: 88 | cadastraProduto erro: ${error}`);
        navigate.reset({
        index: 0,
        routes: [{ name: paginacao}],
      }); 
      Alert.alert('Conexão com HOST falhou!')
    }
  };
  console.log('___________________________________________________________________');
}
//***********************************************************************************//
//***********************************************************************************//

  return (
    <TouchableOpacity
    style={styles.btn_close}
    onPress={ cadastraProduto }
    >
      <Text style={styles.btn_text}>Cadastrar</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  btn_text: {
    color: "#FFF",
    fontWeight: "600",
    textAlignVertical: "center",
    fontSize: 20
  },
});

export default btnFechaApp;