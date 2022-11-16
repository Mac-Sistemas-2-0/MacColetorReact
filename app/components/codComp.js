import React, { useContext } from "react";
import {
  TextInput,
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  Alert, TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../context/AppContext';
import Apap from './qr'

//import BarcodeZxingScan from "react-native-barcode-zxing-scan";

function cardComp() {
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
    SECAO_CONSULTA_PRECO, set_SECAO_CONSULTA_PRECO,
    GRUPO_CONSULTA_PRECO, set_GRUPO_CONSULTA_PRECO,
    RESERVA_CONSULTA_PRECO, set_RESERVA_CONSULTA_PRECO,
    PRECO_CONSULTA_PRECO, set_PRECO_CONSULTA_PRECO,
    COPIAS_CONSULTA_PRECO, set_COPIAS_CONSULTA_PRECO,
    paginacao, setPaginacao
  } = useContext(AppContext);

//***********************************************************************************//
//***********************************************************************************//
//=================> Função para BUSCAR produto - Bruno Faria <=====================//
//***********************************************************************************//
  const buscaProduto = async () => {
    console.log('___________________________________________________________________');
    console.log('<============> Função buscaProduto - Página codComp <=============>');
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
    console.log('Linha: 60 | Paginação: '+ paginacao);
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
      }
      else {
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
            tipo: 'busca',
            item: [{codigo: COD_INVENTARIO}]
          })
        },
        );
        const json = await response.json();
//====================================================================================//
//======================* Verificação de URL e json Enviado! *==========================//
        console.log('Linha: 92 | MontaUrl: ' + JSON.stringify(montaUrl));
        console.log('Linha: 93 | Retorno da Api: ' + JSON.stringify(json));
//====================================================================================//
//========================* Tratamento de retornos da API! *============================//
        if(json.sucesso === "ok") {
          if(json.retorno === 'Produto não encontrado') {
            console.log('Produto não encontrado');
            setDISPLAY(false);
            Alert.alert('Produto não encontrado')
          } else {
              //=======* Inserindo valores nos estados caso a comunicação seja bem sucedida! *======//
              setCOD_INVENTARIO(json.retorno.codigo);
              setDESCRICAO_INVENTARIO(json.retorno.nome);
              setLOCALIZACAO_INVENTARIO(json.retorno.localizacao);
              if(json.retorno.status === 'ATIVO') {
                setValueStatus('ATIVO')
                setSTATUS_INVENTARIO(
                  [
                    {label: 'ATIVO', value: 'ATIVO'},
                    {label: 'DESATIVAR', value: 'INATIVO'}
                  ]
                );
              } else if(json.retorno.status === '') {
                setValueStatus('ATIVO')
                setSTATUS_INVENTARIO(
                  [
                    {label: 'ATIVO', value: 'ATIVO'},
                    {label: 'DESATIVAR', value: 'INATIVO'}
                  ]
                );
              } else {
                setValueStatus('INATIVO')
                setSTATUS_INVENTARIO(
                  [
                    {label: 'INATIVO', value: 'INATIVO'},
                    {label: 'ATIVAR', value: 'ATIVO'}
                  ]
                );
              }
              setUNIDADE_INVENTARIO(json.retorno.unidade);
              setESTADO_ATUAL_INVENTARIO(json.retorno.estoque);
              setESTADO_APURADO_INVENTARIO(json.retorno.estoque);
              set_SECAO_CONSULTA_PRECO(json.retorno.secao);
              set_GRUPO_CONSULTA_PRECO(json.retorno.grupo);
              set_RESERVA_CONSULTA_PRECO(json.retorno.reserva);
              set_PRECO_CONSULTA_PRECO(json.retorno.preco);
              setDISPLAY(false);
              navigate.reset({
                index: 0,
                routes: [{ name: paginacao}],
              });
          }
        }
      }
    } 
    catch (error) {
      setDISPLAY(false);
      if(toString(error).includes('failed', -1)) {
        console.log(`Inventario erro: ${error}`);
          navigate.reset({
          index: 0,
          routes: [{ name: paginacao}],
        }); 
        Alert.alert('Conexão com HOST falhou!')
      }
    };
    console.log('___________________________________________________________________');
  };
//***********************************************************************************//

//***********************************************************************************//
//***********************************************************************************//
//===========> Função para LIMPAR INFORMAÇÔES produto - Bruno Faria <==============//
// Reseta todo estado global para o valor inicial e renderiza a tela novamente
// para exibir o valor inicial dos estados!
//***********************************************************************************//
  const limpaProduto = () => {
    console.log('___________________________________________________________________');
    console.log('<============> Função limpaProduto - Página codComp <=============>');
    setDISPLAY(true);
    setCOD_INVENTARIO('');
    setDESCRICAO_INVENTARIO('');
    setLOCALIZACAO_INVENTARIO('');
    setValueStatus('ATIVO');
    setTIPO_INVENTARIO('PARCIAL')
    setUNIDADE_INVENTARIO('');
    setESTADO_ATUAL_INVENTARIO('');
    setESTADO_APURADO_INVENTARIO('');
    set_SECAO_CONSULTA_PRECO('');
    set_GRUPO_CONSULTA_PRECO('');
    set_RESERVA_CONSULTA_PRECO('');
    set_PRECO_CONSULTA_PRECO('');
    set_COPIAS_CONSULTA_PRECO('');
    console.log( 'Linha: 184 | Estados vazios');
    console.log('___________________________________________________________________');
  }
//***********************************************************************************//
//***********************************************************************************//

  return (
    <View style={ styles.inputContainer} >
      <Text style={styles.titleInput}>COD:</Text>
      {/* <=======> Renderização do INPUT <=======> */}
      <TextInput
        style={styles.input}
        onChangeText={setCOD_INVENTARIO}
        value={COD_INVENTARIO}
        placeholderTextColor ="#FFFFFF"
        keyboardType="numeric"
      />
      {/* <=======> Renderização do BTN camera <=======> */}
      <Pressable
       /*  onPress={() => openScanner} */
        >
        <Image
          style={styles.logoFooterBTN}
          source={require('../assets/images/camera.png')}
        />
      </Pressable>
      {/* <=======> Renderização do BTN Pesquisar/Lupa <=======> */}
      <Pressable
        onPress={ buscaProduto }
        >
        <Image
          style={styles.logoFooterBTN}
          source={require('../assets/images/lupa.png')}
        />
      </Pressable>
      {/* <=======> Renderização do BTN Limpar <=======> */}
      <Pressable
        onPress={ limpaProduto }
        >
        <Image
          style={styles.logoFooterBTN}
          source={require('../assets/images/closeBlue.png')}
        />
      </Pressable>
      {/* <Apap/> */}
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 5,
    borderBottomColor: "#02225B"
  },
  logoFooterBTN: {
    width: 30,
    marginLeft: 5,
    height: 30
  },
  titleInput: {
    fontSize: 20,
    fontWeight: "600",
    position: "relative",
    color: "#FFF"
  },
  input: {
    height: 35,
    width: "55%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginLeft: 5,
    color: "#000",
    fontSize: 20,
    backgroundColor: "#FFF",
  },
});

export default cardComp;