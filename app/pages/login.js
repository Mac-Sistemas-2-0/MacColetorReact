import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  Pressable,
  TouchableOpacity
} from 'react-native';
import AppContext from '../context/AppContext';
import BtnFechaApp from '../components/btnFechaApp';
import {useNavigation} from '@react-navigation/native';
import Reload from '../components/reload'

function Login() {

  const navigate = useNavigation()
  const {
    PORTA, 
    SERVIDOR,
    CODIGO_VENDEDOR, CAPTURA_CODIGO_VENDEDOR,
    SENHA_VENDEDOR, CAPTURA_SENHA_VENDEDOR,
    display, setDISPLAY
  } = useContext(AppContext);

  useEffect(() => {
    
    return () => {
      console.log('------------------ ');
      console.log('login - Linha 35: ' + JSON.stringify(`Codigo Vendedor: ${CODIGO_VENDEDOR}`));
      console.log('login - Linha 36: ' + JSON.stringify(`Senha Vendedor: ${SENHA_VENDEDOR}`));
      console.log('login - Linha 37: ' + JSON.stringify(`servidor: http://${SERVIDOR}:${PORTA}/coletor`));
      console.log('------------------ ');
    };
  }, [CODIGO_VENDEDOR, SENHA_VENDEDOR, SERVIDOR, PORTA  ]);

//***********************************************************************************//
//***********************************************************************************//
//=================> Função para LOGAR USUARIO - Bruno Faria <=====================//
//***********************************************************************************//
  const conectApi = async () => {
//***********************************************************************************//
// Função [ navigate.reset() ] implementada no inicio da função pois o contextoAPI so altera o valor
// do estado global na renderização da tela, então na chamada da função ele renderiza 
// novamente a tela para atualizar os estados globais para usar as informações atribuidas
// aos campos.
//***********************************************************************************//
    navigate.reset({
      index: 0,
      routes: [{ name: 'HOME' }],
    });
//------------------------------------------------------------------------------------\\
    setDISPLAY(true);
    const montaUrl = `http://${SERVIDOR}:${PORTA}/coletor`
    try {
      //============* Validação de informações de HOST e codigo do produto! *============//
      if(SERVIDOR === '' | PORTA === '') {
        setDISPLAY(false);
        Alert.alert('Inclua informações do Servidor!')
      } else {
        const response = await fetch(montaUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            usuario: CODIGO_VENDEDOR.toUpperCase(),
            senha: SENHA_VENDEDOR,
            tipo: 'login'
          })
        },
        );
        const json = await response.json();
//====================================================================================//
//======================* Verificação de URL e json Enviado! *==========================//
        console.log('COD COMP - Linha 59: ' + JSON.stringify(`Login ${CODIGO_VENDEDOR.toUpperCase()}`));
        console.log('COD COMP - Linha 60: ' + JSON.stringify(`Login ${SENHA_VENDEDOR}`));
        console.log('COD COMP - Linha 61: ' + JSON.stringify(`Login ${montaUrl}`));
        console.log('COD COMP - Linha 62: ' + JSON.stringify(`Login ${JSON.stringify(json)}`));
//====================================================================================//
//========================* Tratamento de retornos da API! *============================//

        if(JSON.stringify(json.retorno) === '"autenticado"') {
          setDISPLAY(false);
          navigate.navigate('MENU')
        } else if(JSON.stringify(json.retorno)  === '"Usuário incorreto"') {
          setDISPLAY(false);
          Alert.alert('Usuário incorreto!')
        } else if(JSON.stringify(json.retorno)  === '"Senha incorreta"') {
          setDISPLAY(false);
          Alert.alert('Senha incorreta!')
        } else if(CODIGO_VENDEDOR === '' | SENHA_VENDEDOR === '') {
          setDISPLAY(false);
          Alert.alert('Preencha as informações de Login!')
        } 
      }
    } catch (error) {
      console.log(error)
      setDISPLAY(false);
      Alert.alert('Conexão com HOST falhou!')
   }
  }

//***********************************************************************************//
//***********************************************************************************//


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
              onPress={ conectApi }
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
        {display ? <Reload/> : null}
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
  none: {
    display: "none"
  },
  flex: {
    display: "flex"
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