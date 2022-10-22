import React from "react";
import {
  BackHandler,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

function btnFechaApp() {
  return (
    <TouchableOpacity
    style={styles.btn_close}
    onPress={() => {
      Alert.alert(
        'Exit App',
        'Deseja fechar o aplicativo?',
        [
          {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Yes', onPress: () => BackHandler.exitApp()},
        ],
        { cancelable: false });
        return true;
    }}
    >
      <Image
        style={styles.logoFooterBTN}
        source={require('../assets/images/fechar.png')}
      />
      <Text style={styles.btn_text}>FECHAR</Text>
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
    fontSize: 15
  }
});

export default btnFechaApp;