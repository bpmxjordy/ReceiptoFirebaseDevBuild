// Profile.js
import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import { Button, Text, Input, Image} from 'react-native-elements';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useAuth } from '../AuthContext';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = ({navigation}) => {
    const { currentUser } = useAuth();
    const { signOut } = useAuth();

    const ReceiptHistoryNav = () => {
      navigation.push("ReceiptHistory")
    }

    const ReadReceiptNav = () => {
      navigation.push("ReadReceipt")
    }

    return (
          <View style={styles.container}>
          <Text style={{color: 'white'}}>{currentUser.email}</Text>
          <TouchableOpacity 
          style={{
            width: '50%',
            height: 'auto',
            margin: '5%',
            padding: 10,
            borderRadius: 10,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}
          onPress={ReceiptHistoryNav}
          >
            <Text style={{fontWeight: 'bold'}}>Receipt History</Text>
          </TouchableOpacity>

        <TouchableOpacity 
        style={{
          width: '50%',
          height: 'auto',
          margin: '5%',
          padding: 10,
          borderRadius: 10,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
          }}
        onPress = {() => signOut()}
        >
          <Text style={{fontWeight: 'bold'}}>Sign Out</Text>
        </TouchableOpacity>
         
        <TouchableOpacity 
        style={{
          width: '50%',
          height: 'auto',
          margin: '5%',
          padding: 10,
          borderRadius: 10,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
          }}
        onPress={ReadReceiptNav}
        >
          <Text style={{fontWeight: 'bold'}}>Sign Out</Text>
        </TouchableOpacity>
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      heighT: '100%',
      width: '100%',
      backgroundColor: '#080B16',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

export default Profile;
