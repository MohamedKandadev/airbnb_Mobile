import { DefaultStyles } from "@/constants/Styles";
import { Feature, ListingMap } from "@/types/listings";
import { router } from "expo-router";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapsView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

interface IListingMaps {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 37.33,
  longitude: -122,
  latitudeDelta: 9,
  longitudeDelta: 9,
};

const ListingsMap: FC<IListingMaps> = ({ listings }) => {
  const onMarkerSelected = (item: Feature) => {
    router.push(`listing/${item.properties.id.toString()}`);
  };

  return (
    <View style={DefaultStyles.container}>
      <MapsView
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
      >
        {listings.features.map((item: Feature, index: number) => (
          <Marker
            key={index}
            onPress={() => onMarkerSelected(item)}
            coordinate={{
              latitude: +item.properties.latitude,
              longitude: +item.properties.longitude,
            }}
          />
        ))}
      </MapsView>
    </View>
  );
};

export default ListingsMap;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
