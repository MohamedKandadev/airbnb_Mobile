import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { IListing } from "@/types";
import ListingItem from "./ListingItem";
import { Fonts } from "@/constants";

interface IListinsProps {
  isLoading: boolean;
  listings: IListing[];
}

const Listings: FC<IListinsProps> = ({ isLoading, listings }) => {
  return (
    <FlatList
      data={isLoading ? [] : listings}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <ListingItem listing={item} />}
      ListHeaderComponent={() => (
        <Text style={styles.numberOfRooms}>Over 1000 rooms</Text>
      )}
    />
  );
};

export default Listings;

const styles = StyleSheet.create({
  numberOfRooms: {
    textAlign: "center",
    fontFamily: Fonts["mon-sb"],
    fontSize: 15,
  },
});
