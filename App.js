import React from 'react';
import HomeScreen from './components/HomeScreen';
import { createStackNavigator } from "@react-navigation/stack";

import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ProfileScreen from './components/ProfileScreen';

const Stack = createStackNavigator();


export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login">
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Register"
						component={RegisterScreen}
						options={{ headerShown: true}}
					/>
					<Stack.Screen
						name="Profile"
						component={ProfileScreen}
						options={{ headerShown: true }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}
