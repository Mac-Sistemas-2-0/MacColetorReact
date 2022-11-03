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
      <Text style={styles.btn_text}>Cadastrar</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  btn_text: {
    color: "#FFF",
    fontWeight: "600",
    textAlignVertical: "center",
    fontSize: 20
  },
});

export default btnFechaApp;