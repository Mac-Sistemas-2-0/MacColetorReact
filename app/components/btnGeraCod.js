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
    setCOD_INVENTARIO,
    setDESCRICAO_INVENTARIO,
    setESTADO_ATUAL_INVENTARIO,
    PORTA, 
    SERVIDOR,
    display, setDISPLAY,
    paginacao, setPaginacao
  } = useContext(AppContext);

//**********************************************************************************//
//**********************************************************************************//
//==================> Função para GERAR CODIGO - Bruno Faria <======================//
//**********************************************************************************//
  const geraCodigo = async () => {
    console.log('___________________________________________________________________');
    console.log('<============> Função geraCodigo - Página btnGeraCod <============>');
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
    console.log('Linha: 45 | Paginação:  ' + paginacao );
//------------------------------------------------------------------------------------\\
    setDISPLAY(true);
    const montaUrl = `http://${SERVIDOR}:${PORTA}/coletor`;
    try {
      //============* Validação de informações de HOST e codigo do produto! *============//
      if(SERVIDOR === '' | PORTA === '') {
        setDISPLAY(false);
        Alert.alert('Inclua informações do Servidor!')
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
            tipo: 'geraCodigo',
          })
        },
        );
        const json = await response.json();
        const codigo = json.retorno.codigo;
        const validaCod = await fetch(montaUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            usuario: CODIGO_VENDEDOR.toUpperCase(),
            senha: SENHA_VENDEDOR,
            tipo: 'busca',
            item: [{codigo: codigo}]
          })
        },
        );
        const validaJson = await validaCod.json();
        if(validaJson.retorno === 'Produto não encontrado') {
          setCOD_INVENTARIO(codigo);
          setDESCRICAO_INVENTARIO('');
          setESTADO_ATUAL_INVENTARIO('');
        } else {
          Alert.alert("Produto já existe, Gerar novo Codigo!")
        }
//====================================================================================//
//======================* Verificação de URL e json Enviado! *==========================//
        console.log('Linha: 96 | MontaUrl: ' + JSON.stringify(montaUrl));
        console.log('Linha: 97 | Retorno da Api: ' + JSON.stringify(json));
        console.log('Linha: 98 | Codigo: ' + codigo);
        console.log('Linha: 99 | Retorno da Api: ' + JSON.stringify(validaJson));
        setDISPLAY(false);
//====================================================================================//
//========================* Tratamento de retornos da API! *============================//
      }
    }
    catch (error) {
      setDISPLAY(false);
      if(toString(error).includes('failed', -1)) {
        console.log(`btnGeraCod erro: ${error}`);
          navigate.reset({
          index: 0,
          routes: [{ name: paginacao}],
        });
        console.log("error");
        Alert.alert('Conexão com HOST falhou!')
      }
    };
    console.log('___________________________________________________________________');
  };
//**********************************************************************************//

  return (
    <TouchableOpacity
    style={styles.btn_close}
    onPress={ geraCodigo }
    >
      <Text style={styles.btn_text}>Gerar Código</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  btn_text: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 20
  }
});

export default btnFechaApp;