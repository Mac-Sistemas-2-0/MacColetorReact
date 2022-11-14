import React, { useContext, useState, useEffect } from "react";
import AppContext from '../context/AppContext';
import { StyleSheet,
  Text, 
  Pressable, 
  View,
  TextInput,
  Alert,
} from "react-native";
import {useNavigation} from '@react-navigation/native';
import CardComp from "../components/codComp";
import BtnSalvar from "../components/btnSalvar";
import Reload from '../components/reload';
import { Picker } from "@react-native-picker/picker";

const Inventario = () => {
  const navigate = useNavigation()
  const {
    CODIGO_VENDEDOR, setCOD_INVENTARIO,
    SENHA_VENDEDOR,
    COD_INVENTARIO,
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
    valueTipo, setValueTipo,
    limpaProduto
  } = useContext(AppContext);

  const [itemsTipo] = useState(TIPO_INVENTARIO);
  const [itemsStatus] = useState(STATUS_INVENTARIO);

  const dataInput = [
    {
      nome: "Descrição: ",
      function: setDESCRICAO_INVENTARIO,
      tipo: "input",
      value: DESCRICAO_INVENTARIO
    },
    {
      nome: "Localização: ",
      function: () => setLOCALIZACAO_INVENTARIO,
      tipo: "input",
      value: LOCALIZACAO_INVENTARIO
    },
    {
      nome: "Status: ",
      function: () => setSTATUS_INVENTARIO,
      tipo: "dropdown",
      items: STATUS_INVENTARIO,
      value: ValueStatus,
      setValue: setValueStatus,
    },
    {
      nome: "Tipo: ",
      function: () => setTIPO_INVENTARIO,
      tipo: "dropdown",
      items: itemsTipo,
      value: valueTipo,
      setValue: setValueTipo,
      value: TIPO_INVENTARIO,
    },
    {
      nome: "Unidade: ",
      function: () => setUNIDADE_INVENTARIO,
      tipo: "input",
      value: UNIDADE_INVENTARIO
    },
    {
      nome: "Est. Atual: ",
      function: () => setESTADO_ATUAL_INVENTARIO,
      tipo: "input",
      value: ESTADO_ATUAL_INVENTARIO
    },
    {
      nome: "Est. Apurado: ",
      function: () => setESTADO_APURADO_INVENTARIO,
      tipo: "input",
      value: ESTADO_APURADO_INVENTARIO
    }
  ];

//***********************************************************************************//
//===========> Função para LIMPAR INFORMAÇÔES produto - Bruno Faria <==============//
// Reseta todo estado global para o valor inicial e renderiza a tela novamente
// para exibir o valor inicial dos estados!
//***********************************************************************************//
const limpaVolta = () => {
  setCOD_INVENTARIO('');
  setDESCRICAO_INVENTARIO('');
  setLOCALIZACAO_INVENTARIO('');
  setValueStatus('ATIVO')
  setUNIDADE_INVENTARIO('');
  setESTADO_ATUAL_INVENTARIO('');
  setESTADO_APURADO_INVENTARIO('');
  navigate.navigate("MENU")
}

  return (
    // container global
    <View style={styles.tela} >
      {/* Cabecalho */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Inventario
        </Text>
      </View>
      {/* Corpo da aplicacao */}
      <View style={styles.centeredView}>
        <CardComp/>
        { dataInput.map((e) => {
          if(e.tipo === 'input') {
            return(
              <View style={ styles.inputContainer} key={e.nome}>
                <Text style={styles.titleInput}>{e.nome}</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={e.function}
                  value={e.value}
                  placeholderTextColor ="#FFFFFF"
                  keyboardType="text"
                />
              </View>
            )
          } else {
            return(
              <View style={ styles.inputContainer} key={e.nome} >
                <View>
                  <Text style={styles.titleInput}>{e.nome}</Text>
                </View>
                <View style={styles.input}>
                  <Picker
                    width={'100%'}
                    selectedValue={e.value}
                    onValueChange={(value) => {
                      setValueStatus(value)
                    }
                    }>
                      {
                        e.items.map((item) => {
                          return(
                            <Picker.Item
                              style={{color: "black", background: "none"}}
                              key={item.label} 
                              label={item.label} 
                              value={item.value} 
                            /> 
                          )
                        })
                      }
                  </Picker>
                </View>
              </View>
            )
          }
          })
        }
      </View>
      {display ? <Reload/> : null}
      {/* Rodape */}
      <View style={styles.footerLogin}>
      <Pressable
            onPress={ limpaVolta }
          >
            <Text style={styles.textStyle}>Voltar</Text>
      </Pressable>
      <BtnSalvar/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: "95%",
    height: "85%",
    borderRadius: 10,
    flexWrap: "nowrap",
  },
  logoFooterBTN: {
    width: 30,
    marginLeft: 5,
    height: 30
  },
  tela: {
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    height: "100%",
    backgroundColor: "#0E4BB3",
  },
  header: {
    alignItems: "center",
    padding: 10,
    width: "100%",
    backgroundColor: "#02225B"
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFF"
  },
  inputContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 3,
    borderBottomColor: "#02225B",
    /* zIndex: 9 */
  },
  titleInput: {
    fontSize: 20,
    fontWeight: "600",
    position: "relative",
    color: "#FFF"
  },
  button: {
    borderRadius: 2,
    width: 170,
    marginBottom: 10,
    marginTop: 10,
    padding: 5,
    backgroundColor: "#0E4BB3",
  },
  textStyle: {
    color: "#FFF",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 18
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    justifyContent: "center",
    height: 35,
    width: "55%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginLeft: 5,
    color: "#000",
    fontSize: 15,
    backgroundColor: "#FFF",
  },
  footerLogin: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#02225B"
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  card_acess: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
});

export default Inventario;