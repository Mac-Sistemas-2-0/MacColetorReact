import React, { useContext } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import AppContext from '../context/AppContext';
import BtnFechaApp from '../components/btnFechaApp';
import {useNavigation} from '@react-navigation/native';
import CardMenu from "../components/cardMenu";

const ConectModal = () => {
  const navigate = useNavigation()

  const {
    CODIGO_VENDEDOR,
  } = useContext(AppContext);
  return (
    // container global
    <View style={styles.tela} >
      {/* Cabecalho */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Mac Coletor
        </Text>
      </View>
      {/* Corpo da aplicacao */}
      <View style={styles.centeredView}>
        <Text style={styles.titleUser}>Bem vindo {CODIGO_VENDEDOR.toUpperCase()}!</Text>
        <View>
          <CardMenu/>
        </View>
      </View>
      {/* Rodape */}
      <View style={styles.footerLogin}>
        <BtnFechaApp/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "flex-start",
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
  footerLogin: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#02225B"
  },
  titleUser: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "600",
    color: "#FFF"
  }
});

export default ConectModal;