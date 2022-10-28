import React, {useContext} from "react";
import {
  TextInput,
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../context/AppContext';

function cardComp() {
  const navigate = useNavigation()
  const {
    COD_INVENTARIO, setCOD_INVENTARIO,
  } = useContext(AppContext);

  return (
    <View style={ styles.inputContainer} >
    <Text style={styles.titleInput}>COD:</Text>
    <TextInput
      style={styles.input}
      onChangeText={setCOD_INVENTARIO}
      placeholderTextColor ="#FFFFFF"
      keyboardType="text"
    />
    <Pressable
      onPress={() => Alert.alert('abriu can')
      }
      >
      <Image
        style={styles.logoFooterBTN}
        source={require('../assets/images/camera.png')}
      />
    </Pressable>
    <Pressable
      onPress={() => Alert.alert('abriu can')
      }
      >
      <Image
        style={styles.logoFooterBTN}
        source={require('../assets/images/lupa.png')}
      />
    </Pressable>
    <Pressable
      onPress={() => Alert.alert('abriu can')
      }
      >
      <Image
        style={styles.logoFooterBTN}
        source={require('../assets/images/closeBlue.png')}
      />
    </Pressable>
    
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
    color: "#0E4BB3"
  },
  input: {
    height: 30,
    width: "55%",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 5,
    padding: 10,
    color: "#FFFFFF",
    fontSize: 15,
    backgroundColor: "#577BFF",
  },
});

export default cardComp;