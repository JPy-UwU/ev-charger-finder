import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

import Colors from '../../../utils/Colors';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = () => {
    
  }

  return (
    <View style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
    }}>
      <Image 
        source={require("../../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      <Image 
        source={require("../../../assets/images/bg.jpg")}
        style={styles.bgImage}
      />
      <View style={{padding: 20}}>
        <Text style={styles.heading}>Your Ultimate EV Charging Station Finder App</Text>
        <Text style={styles.desc}>Find EV Charger near you, Plan trip and so much more in just one click</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {console.log("Login")}}  
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontSize: 17,
              fontFamily: "Outfit",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoImage: {
    width: "100%",
    height: 40,
    objectFit: "cover",
  },
  bgImage: {
    width: "100%",
    height: 240,
    marginTop: 20,
    objectFit: "cover",
  },
  heading: {
    fontSize: 25,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    marginTop: 20,
  },
  desc: {
    fontSize: 17,
    fontFamily: "Outfit",
    marginTop: 15,
    textAlign: "center",
    color: Colors.GRAY,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 20,
  },
})