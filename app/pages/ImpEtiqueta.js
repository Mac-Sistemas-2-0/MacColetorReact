import React, { useContext } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import AppContext from '../context/AppContext';
import {useNavigation} from '@react-navigation/native';

const ImpEtiqueta = () => {
  const navigate = useNavigation()
  const {
    PORTA, CAPTURA_PORTA,
    SERVIDOR, CAPTURA_SERVIDOR
  } = useContext(AppContext);
  return (
    // container global
    <View style={styles.tela} >
      {/* Cabecalho */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Imprimir Etiqueta
        </Text>
      </View>
      {/* Corpo da aplicacao */}
      <View style={styles.centeredView}>
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
    justifyContent: "center",
    alignItems: "center",
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
    color: "#FFFFFF"
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
    height: 40,
    width: 300,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    color: "#FFFFFF",
    fontSize: 15,
    backgroundColor: "#577BFF",
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

export default ImpEtiqueta;