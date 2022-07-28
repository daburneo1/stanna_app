import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from "react-native";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);

import Navigation from "./src/navigation/Navigation";
import {AuthProvider} from './src/context/AuthContext'

export default function App() {
  return (
      <NavigationContainer>
          <AuthProvider>
              <Navigation />
          </AuthProvider>
      </NavigationContainer>
  );
}