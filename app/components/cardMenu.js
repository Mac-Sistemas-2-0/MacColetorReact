import React, { useContext } from "react";
import {  StyleSheet, Text, Pressable, View, Image } from "react-native";
import AppContext from '../context/AppContext';
import BtnFechaApp from './btnFechaApp';
import {useNavigation} from '@react-navigation/native';


const CardMenu = () => {
  const navigate = useNavigation()
  const menu = [
    {
      nome: "Inventário",
      icon: require('../assets/images/iconList.png'),
      nav: () => navigate.navigate('INVENTARIO')
    },
    {
      nome: "Imp.Etiqueta",
      icon: require('../assets/images/iconImpress.png'),
      nav: () => navigate.navigate('IMPETIQUETA')
    },
    {
      nome: "Consulta Preço",
      icon: require('../assets/images/iconPreco.png'),
      nav: () => navigate.navigate('CONSULTAPRECO')
    },
    {
      nome: "Cotação",
      icon: require('../assets/images/iconGrafico.png'),
      nav: () => navigate.navigate('COTACAO')
    }
  ]
  const {
    PORTA, CAPTURA_PORTA,
    SERVIDOR, CAPTURA_SERVIDOR
  } = useContext(AppContext);
  return (
    // container global
    <View>
      {/* Corpo da aplicacao */}
      <View style={styles.card}>
          { menu.map((e) => {
            return(
              <Pressable
              style={[styles.button]}
              onPress={e.nav}
              key={e.nome}
              >
                <Image
                style={styles.logo}
                resizeMode="stretch"
                source={e.icon}/>
                <Text style={styles.title}>{e.nome}</Text>
              </Pressable>
            )
            })
          }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    width: 400
  },
  button: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingBottom: 10,
    paddingTop: 10,
    margin: 10,
    width: 150,
    height: 150
  },
  title: {
    marginTop: 10,
    fontSize: 17,
    color: "#02225B",
    fontWeight: "600"
  },
  logo: {
     width: 80,
     height: 80
  }
});

export default CardMenu;