import NfcManager, { NfcTech, nfcManager, Ndef } from 'react-native-nfc-manager';
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-elements';

const ReadReceipt = () => {
  const [receipt, setReceipt] = useState('');

  /*
  const PullNFCData = async () => {
    try{
      await nfcManager.requestTechnology(NfcTech.Ndef);
      setReceipt(nfcManager.getTag);

      console.log("ReceiptID: ", receipt);
    
  } catch {}
}
  
    NfcManager.getTag()
  .then(tag => {
    if (tag) {
      // Process tag data
    } else {
      console.log('No tag data');
    }
  })
  .catch(error => {
    console.error('Error reading NFC Tag:', error);
  });
};*//*
try {
     await NfcManager.requestTechnology(NfcTech.Ndef);
     const tag = await NfcManager.getTag();
     console.log('NFC Tag found:', tag);
     return tag.id;
   } catch (ex) {
     console.log('Error reading NFC Tag:', ex);
   } finally {
     NfcManager.cancelTechnologyRequest();
   }
  };

const fetchReceipt = async (receiptId) => {
    try {
      const response = await fetch(`http://192.168.1.145:3000/api/receipts?_id=${receiptId}`);
      const receiptData = await response.json();
      return receiptData;
    } catch (error) {
      console.error('Error fetching receipt data:', error);
    }
  };
  
  const ReadReceipt = () => {
    const [receipt, setReceipt] = useState();
  
    const handleReadNfc = async () => {
      const receiptId = await readNfcTag();
      if (receiptId) {
        const fetchedReceipt = await fetchReceipt(receiptId);
        setReceipt(fetchedReceipt);
      }
    };
    
  
    useEffect(() => {
      NfcManager.start();
      return () => {
        NfcManager.stop();
      };
    }, []);
  
    return (
      <View>
        <Button title="Read NFC Tag" onPress={PullNFCData} />
          <View>
            {}
            <Text>Date: {receipt}</Text>
            {}
          </View>
      </View>
    );
  };
  
  */

  const [nfcText, setNfcText] = useState('');

  useEffect(() => {
    NfcManager.start();

    return () => {
        NfcManager.stop();
    };
}, []);

  const readNfcTag = async () => {
    try {
        // Start the NDEF reader
        await NfcManager.requestTechnology(NfcManager.NfcTech.Ndef);
        
        // Get the tag data
        const tag = await NfcManager.getTag();
        console.log(tag);

        // Process the tag data (e.g., extract ID or other info)
        // ...

    } catch (error) {
        console.error('Error reading NFC Tag:', error);
    } finally {
        // Stop the NDEF reader
        NfcManager.cancelTechnologyRequest();
    }
};


  return (
      <View style={{ padding: 20 }}>
          <Text>NFC Tag Text:</Text>
          <Text>{readNfcTag}</Text>
      </View>
  );
};

  export default ReadReceipt;