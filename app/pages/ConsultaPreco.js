import React, { useContext } from "react";
import AppContext from '../context/AppContext';
import { StyleSheet,
  Text, 
  Pressable, 
  View,
  TextInput,
  Alert,
  Image
} from "react-native";
import {useNavigation} from '@react-navigation/native';

import CardComp from "../components/codComp";

const ConsultaPreco = () => {
  const navigate = useNavigation()

  const {
    DESCRICAO_INVENTARIO, setDESCRICAO_INVENTARIO,
    LOCALIZACAO_INVENTARIO, setLOCALIZACAO_INVENTARIO,
    SECAO_CONSULTA_PRECO, set_SECAO_CONSULTA_PRECO,
    GRUPO_CONSULTA_PRECO, set_GRUPO_CONSULTA_PRECO,
    UNIDADE_INVENTARIO, setUNIDADE_INVENTARIO,
    ESTADO_ATUAL_INVENTARIO, setESTADO_ATUAL_INVENTARIO,
    RESERVA_CONSULTA_PRECO, set_RESERVA_CONSULTA_PRECO,
    PRECO_CONSULTA_PRECO, set_PRECO_CONSULTA_PRECO,
    COPIAS_CONSULTA_PRECO, set_COPIAS_CONSULTA_PRECO
  } = useContext(AppContext);

  const dataInput = [
    {
      nome: "Descrição: ",
      function: () => setDESCRICAO_INVENTARIO
    },
    {
      nome: "Localização: ",
      function: () => setLOCALIZACAO_INVENTARIO
    },
    {
      nome: "Seção: ",
      function: () => set_SECAO_CONSULTA_PRECO
    },
    {
      nome: "Grupo: ",
      function: () => set_GRUPO_CONSULTA_PRECO
    },
    {
      nome: "Est. Atual: ",
      function: () => setESTADO_ATUAL_INVENTARIO
    },
    {
      nome: "Reserva: ",
      function: () => set_RESERVA_CONSULTA_PRECO
    },
    {
    nome: "Unidade: ",
    function: () => setUNIDADE_INVENTARIO
    },
    {
      nome: "Preço: ",
      function: () => set_PRECO_CONSULTA_PRECO
    },
    {
      nome: "Qtde. Cópias: ",
      function: () => set_COPIAS_CONSULTA_PRECO
    },
  ];

  return (
    // container global
    <View style={styles.tela} >
      {/* Cabecalho */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Consulta Preço
        </Text>
      </View>
      {/* Corpo da aplicacao */}
      <View style={styles.centeredView}>
        <CardComp/>
        { dataInput.map((e) => {
            return(
              <View style={ styles.inputContainer} key={e.nome}>
                <Text style={styles.titleInput}>{e.nome}</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={e.function}
                  placeholderTextColor ="#FFFFFF"
                  keyboardType="text"
                />
              </View>
            )
          })
        }
      </View>
      {/* Rodape */}
      <View style={styles.footerLogin}>
      <Pressable
            onPress={() => navigate.navigate('MENU')
            }
          >
            <Text style={styles.textStyle}>Voltar</Text>
      </Pressable>
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
    borderBottomColor: "#02225B"
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

export default ConsultaPreco;