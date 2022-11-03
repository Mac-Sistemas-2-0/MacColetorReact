import React from "react";
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

  return (
    <TouchableOpacity
    style={styles.btn_close}
    onPress={() => {
      Alert.alert(
        'Exit App',
        'Deseja fechar o aplicativo?',
        [
          { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'Yes', onPress: async () => 
          {
            navigate.navigate('HOME')
            BackHandler.exitApp() 
          }
        },
        ],
        { cancelable: false });
        return true;
    }}
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