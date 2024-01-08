import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";

import AppMapView from "./AppMapView";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { UserLocationContext } from "../../../context/UserLocationContext";
import GlobalApi from "../../../utils/GlobalApi";

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    location && getNearByPlaces();
  }, [location]);

  const getNearByPlaces = () => {
    const data = {
      "includedTypes": ["electric_vehicle_charging_station"],
      "maxResultCount": 10,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": location.latitude,
            "longitude": location.longitude,
          },
          "radius": 5000.0,
        },
      },
    };
    GlobalApi.getNearByPlaces(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location) => console.log(location)} />
      </View>
      <AppMapView />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    padding: 10,
    paddingHorizontal: 20,
    zIndex: 10,
  },
});
