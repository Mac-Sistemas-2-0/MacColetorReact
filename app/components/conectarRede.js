import React, { useContext } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import AppContext from '../context/AppContext';
import BtnFechaApp from '../components/btnFechaApp';

const ConectModal = () => {
  const {
    modalVisible, setModalVisible,
    modalDisplay, setModalDisplay,
    modalDisplayView, setModalDisplayView,
    PORTA, CAPTURA_PORTA,
    SERVIDOR, CAPTURA_SERVIDOR
  } = useContext(AppContext);
  return (
    <View style={[{display: modalDisplay}]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            if (modalDisplay != "none"){
              setModalVisible(false)
              setModalDisplay("none")
            } else {
              setModalVisible(true)
              setModalDisplay("flex")
            }
          }
          }
        >
        <View style={styles.tela} >
        <View style={styles.header}>
          <Text style={styles.title}>
            Configuração
          </Text>
        </View>
        <View style={styles.centeredView}>
          <View style={styles.form}>
            <View style={styles.card_acess}>
              <TextInput
                style={styles.input}
                onChangeText={CAPTURA_SERVIDOR}
                value={SERVIDOR}
                placeholder="HOST"
                placeholderTextColor ="#FFFFFF"
                keyboardType="text"
              />
              <TextInput
                style={styles.input}
                onChangeText={CAPTURA_PORTA}
                value={PORTA}
                placeholder="PORTA"
                placeholderTextColor ="#FFFFFF"
                keyboardType="numeric"
              />
              </View>
              <Pressable
                style={[styles.button]}
                onPress={() => {
                  if (modalDisplay != "none"){
                    setModalVisible(false)
                    setModalDisplay("none")
                    setModalDisplayView("flex")
                  } else {
                    setModalVisible(true)
                    setModalDisplay("flex")
                    setModalDisplayView("none")
                  }
                }
                }
              >
                <Text style={styles.textStyle}>SALVAR</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.footerLogin}>
          <Pressable
                onPress={() => {
                  if (modalDisplay != "none"){
                    setModalVisible(false)
                    setModalDisplay("none")
                    setModalDisplayView("flex")
                  } else {
                    setModalVisible(true)
                    setModalDisplay("flex")
                    setModalDisplayView("none")
                  }
                }
                }
              >
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
          </View>
        </View>
        </Modal>
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
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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

export default ConectModal;