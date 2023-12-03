import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './AuthContext';
import Login from './Screens/LoginUserScreen';
import Register from './Screens/RegisterUserScreen';
import Profile from './Screens/ProfileScreen'
import ReceiptHistory from './Screens/ReceiptHistoryScreen'
import ReceiptDetailScreen from './Screens/ReceiptDetailScreen'
import ReadReceipt from './Screens/ReadReceipt'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="ReceiptHistory" component={ReceiptHistory} options={{ title: 'ReceiptHistory' }} />
        <Stack.Screen name="ReceiptDetailScreen" component={ReceiptDetailScreen} options={{ title: 'ReceiptDetailScreen' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
        <Stack.Screen name="ReadReceipt" component={ReadReceipt} options={{ title: 'ReadReceipt' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}
