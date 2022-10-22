import React from "react";
import Provider from './app/context/Provider';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/pages/home/home';
import ConectaServidor from "./app/pages/conectarRede";
import Menu from "./app/pages/Menu";

const stack = createNativeStackNavigator();

export default function App() {
  return(
    <Provider>
      <NavigationContainer>
        <stack.Navigator>
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
          component={Menu}
          options={{
            headerShown: false
          }}
          />
          <stack.Screen 
          name="IMPETIQUETA" 
          component={Menu}
          options={{
            headerShown: false
          }}
          />
          <stack.Screen 
          name="CONSULTAPRECO" 
          component={Menu}
          options={{
            headerShown: false
          }}
          />
          <stack.Screen 
          name="COTACAO" 
          component={Menu}
          options={{
            headerShown: false
          }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}