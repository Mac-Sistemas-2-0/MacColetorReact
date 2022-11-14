import React, { useContext , useEffect} from "react";
import AppContext from '../context/AppContext';
import {
  BackHandler,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function btnFechaApp() {
  const navigate = useNavigation()

  const {
    COD_INVENTARIO, setCOD_INVENTARIO,
    CODIGO_VENDEDOR,
    SENHA_VENDEDOR,
    PORTA, 
    SERVIDOR,
    DESCRICAO_INVENTARIO, setDESCRICAO_INVENTARIO,
    LOCALIZACAO_INVENTARIO, setLOCALIZACAO_INVENTARIO,
    STATUS_INVENTARIO, setSTATUS_INVENTARIO,
    TIPO_INVENTARIO, setTIPO_INVENTARIO,
    UNIDADE_INVENTARIO, setUNIDADE_INVENTARIO,
    ESTADO_ATUAL_INVENTARIO, setESTADO_ATUAL_INVENTARIO,
    ESTADO_APURADO_INVENTARIO, setESTADO_APURADO_INVENTARIO,
    display, setDISPLAY,
    ValueStatus, setValueStatus,
    valueTipo, setValueTipo
  } = useContext(AppContext);

  useEffect(() => {
    
    return () => {
      console.log('btnSalvar - ' + COD_INVENTARIO);
      console.log('------------------ ');
      console.log('btnSalvar - USE Effect: '+ ValueStatus);
    };
  }, [ValueStatus, COD_INVENTARIO]);

//***********************************************************************************//
//***********************************************************************************//
//===========> Função para SALVAR Alterações no produto - Bruno Faria <==============//
//***********************************************************************************//
const atualizaProduto = async () => {
//***********************************************************************************//
// Função [ navigate.reset() ] implementada no inicio da função pois o contextoAPI so altera o valor
// do estado global na renderização da tela, então na chamada da função ele renderiza 
// novamente a tela para atualizar os estados globais para usar as informações atribuidas
// aos campos.
//***********************************************************************************//
  navigate.reset({
    index: 0,
    routes: [{ name: 'INVENTARIO' }],
  });
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
      Alert.alert('Informe o código do produto')
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
          tipo: 'atualizaEstoque',
          item: [{
            codigo: COD_INVENTARIO,
            apurado:ESTADO_APURADO_INVENTARIO,
            status: ValueStatus
          }]
        })
      },
      );
      const json = await response.json();
//====================================================================================//
//======================* Verificação de URL e json Enviado! *==========================//
      console.log(ValueStatus);
      console.log('BTN SALVAR - Linha 81: ' + JSON.stringify(montaUrl));
      console.log('BTN SALVAR - Linha 82: ' + JSON.stringify(json));
//====================================================================================//
      navigate.reset({
        index: 0,
        routes: [{ name: 'INVENTARIO' }],
      });
      setDISPLAY(false);
      Alert.alert('Produto Atualizado!')
    }
  } catch (error) {
    setDISPLAY(false);
    if(toString(error).includes('failed', -1)) {
      console.log(`Inventario erro: ${error}`);
       navigate.reset({
        index: 0,
        routes: [{ name: 'INVENTARIO' }],
      });
      Alert.alert('Conexão com HOST falhou!')
    }
  };
};
//***********************************************************************************//
//***********************************************************************************//

  return (
    <TouchableOpacity
    style={styles.btn_close}
    onPress={atualizaProduto}
    >
      <Text style={styles.btn_text}>Salvar</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  btn_close: {
    flexDirection: "row",
  },
  logoFooterBTN: {
    width: 30,
    height: 30,
    alignItems: "baseline"
  },
  btn_text: {
    color: "#FFF",
    fontWeight: "600",
    marginLeft: 5,
    textAlignVertical: "center",
    fontSize: 20
  }
});

export default btnFechaApp;