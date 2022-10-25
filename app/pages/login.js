import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  Modal,
  Pressable,
  TouchableOpacity
} from 'react-native';
import AppContext from '../context/AppContext';
import BtnFechaApp from '../components/btnFechaApp';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const navigate = useNavigation()
  const {
    CODIGO_VENDEDOR, CAPTURA_CODIGO_VENDEDOR,
    SENHA_VENDEDOR, CAPTURA_SENHA_VENDEDOR,
  } = useContext(AppContext);

  const dataLogin = [
    {"nome": "Bruno", "senha": "123"},
    {"nome": "Alessandro", "senha": "123"}
  ]

  // function validaLogin() {
  //   for(let i = 0; i < dataLogin.length; i = i + 1) {
  //     if( dataLogin[i].nome.toUpperCase() === CODIGO_VENDEDOR.toUpperCase()) {
  //       Alert.alert( i + ' - ' + dataLogin[i].nome.toUpperCase() + '-' + CODIGO_VENDEDOR.toUpperCase())
  //     } else {
  //       Alert.alert(i + ' - ' + dataLogin[i].nome.toUpperCase() + ' - ' + dataLogin.length + " - Nome Nao confere: " + CODIGO_VENDEDOR)
  //     }
  //   }
  // }

  function validaLogin() {
    for(let i in dataLogin) {
      let user = dataLogin[i]
      if(user.nome.toUpperCase() === CODIGO_VENDEDOR.toUpperCase() && user.senha === SENHA_VENDEDOR){
        return navigate.navigate('MENU')
      }
    }
    return Alert.alert("login invalido")
  }



  return(
    <>
      <SafeAreaView style={[styles.tela]}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Mac Coletor
          </Text>
        </View>
        <View>
          <View style={styles.form}>
            <View style={styles.card_acess}>
                <TextInput
                  style={styles.input}
                  onChangeText={CAPTURA_CODIGO_VENDEDOR}
                  value={CODIGO_VENDEDOR}
                  placeholder="Usuario"
                  placeholderTextColor ="#FFFFFF"
                  keyboardType="text"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={CAPTURA_SENHA_VENDEDOR}
                  value={SENHA_VENDEDOR}
                  placeholder="Senha"
                  placeholderTextColor ="#FFFFFF"
                  keyboardType="numeric"
                />
            </View>
            <Pressable
              style={[styles.button]}
              onPress={() => validaLogin()}
            >
              <Text style={styles.textStyle}>LOGIN</Text>
            </Pressable>
          </View>
          <View style={styles.mac}>
            <Image
              style={styles.logo}
              source={require('../assets/images/9d2dd4_39553eaf4316e9138ed1b999f07154b2.jpg')}
            />
            <Text style={styles.verions}>V 1.2</Text>
          </View>
        </View>
        <View style={styles.footerLogin}>
          <BtnFechaApp/>
          <TouchableOpacity
          style={styles.btn_close}
          onPress={() => {
            navigate.navigate('CONECTSERVIDOR')
          }
          }
          >
            <Image
              style={styles.logoFooterDB}
              source={require('../assets/images/conect.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  tela: {
    justifyContent: "space-between",
    alignItems: "center",
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
  title_input: {
    color: 'blue',
    fontSize: 15,
    height: 30,
    marginBottom: 10,
    marginTop: 10,
    padding: 5,
  },
  checkBox: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignSelf: 'flex-start',
    alignItems: 'center'
  },
  titleCheck: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 10,
    color: "#0E4BB3",
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
  mac: {
    alignItems: 'center',
    padding: 10,
  },
  mac_title: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 30
  },
  mac_title2: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 15
  },
  logo: {
    resizeMode: "stretch",
    borderRadius: 5,
    width: 80,
    height: 80
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
  logoFooterDB: {
    width: 40,
    height: 40,
  },
  verions: {
    color: "#FFF",
    fontWeight: "600",
    marginTop: 5
  }
})



export default Login;