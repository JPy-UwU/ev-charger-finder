import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../../utils/Colors";

export default function SearchBar({ searchedLocation }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 15,
        paddingHorizontal: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 6,
      }}
    >
      <Ionicons
        name="location-sharp"
        size={24}
        color={Colors.GRAY}
        style={{ paddingTop: 10 }}
      />
      <GooglePlacesAutocomplete
        placeholder="Search for EV Charging Stations"
        fetchDetails={true}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          searchedLocation(details?.geometry?.location)
        }}
        query={{
          key: "AIzaSyBPnefDFREW4OfXrEOYCTtRQd7dHkofDlg",
          language: "en",
        }}
      />
    </View>
  );
}
