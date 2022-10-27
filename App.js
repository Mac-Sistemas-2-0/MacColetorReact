import React, {useEffect} from "react";
import Provider from './app/context/Provider';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/pages/home/home';
import ConectaServidor from "./app/pages/conectarRede";
import Menu from "./app/pages/Menu";
import Inventario from "./app/pages/Inventario";
import ImpEtiqueta from "./app/pages/ImpEtiqueta";
import ConsultaPreco from "./app/pages/ConsultaPreco";
import Cotacao from "./app/pages/Cotacao";


const stack = createNativeStackNavigator();

export default function App() {
  return(
    <Provider>
      <NavigationContainer>
        <stack.Navigator
        initialRouteName="HOME"
        >
          <stack.Screen 
          name="HOME" 
          component={Home}
          options={{
            headerShown: false
          }}
          />
          <stack.Screen 
          name="CONECTSERVIDOR" 
          component={ConectaServidor}
          options={{
            headerShown: false
          }}
          />
          <stack.Screen 
          name="MENU" 
          component={Menu}
          options={{
            headerShown: false
          }}
          />
          <stack.Screen 
          name="INVENTARIO" 
          component={Inventario}
          options={{
            headerShown: false
          }}
          />
          <stack.Screen 
          name="IMPETIQUETA" 
          component={ImpEtiqueta}
          options={{
            headerShown: false
          }}
          />
          <stack.Screen 
          name="CONSULTAPRECO" 
          component={ConsultaPreco}
          options={{
            headerShown: false
          }}
          />
          <stack.Screen 
          name="COTACAO" 
          component={Cotacao}
          options={{
            headerShown: false
          }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}