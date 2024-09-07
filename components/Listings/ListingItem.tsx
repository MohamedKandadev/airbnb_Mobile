import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { IListing } from "@/types";
import { Link } from "expo-router";
import { Colors, Fonts, Icons } from "@/constants";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

const ListingItem: FC<{ listing: IListing }> = ({ listing }) => {
  console.log(listing);

  return (
    <Link href={`listing/${listing.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.listingContainer}
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
          <View style={styles.listingImageContainer}>
            <Image
              source={{ uri: listing.medium_url }}
              style={styles.listingImage}
            />
            <TouchableOpacity
              onPress={() => console.log("first")}
              style={styles.listingFavorite}
            >
              <Image
                source={Icons.IconHeart}
                style={styles.listingFavoriteIcon}
                tintColor={"white"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listingDetails}>
            <View style={styles.listingNameRating}>
              <Text style={styles.listingName}>{listing.name}</Text>
              <Text style={styles.listingName}>4.96</Text>
            </View>
            <Text style={styles.listingText}>34Mils</Text>
            <Text style={styles.listingText}>31 october</Text>
            <Text style={styles.listingTotal}>$50 Total</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );
};

export default ListingItem;

const styles = StyleSheet.create({
  listingContainer: {
    width: "100%",
    padding: 16,
  },
  listingImageContainer: {
    position: "relative",
    marginBottom: 10,
  },
  listingImage: {
    width: "100%",
    height: 310,
    borderRadius: 10,
  },
  listingFavorite: {
    position: "absolute",
    top: 13,
    right: 13,
  },
  listingFavoriteIcon: {
    width: 28,
    height: 28,
  },
  listingDetails: {},
  listingNameRating: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listingName: {
    fontFamily: Fonts["mon-sb"],
    fontSize: 17,
    marginBottom: 5,
  },
  listingText: {
    fontFamily: Fonts["mon"],
    fontSize: 16,
    color: Colors.grey,
  },
  listingTotal: {
    marginTop: 10,
    fontFamily: Fonts["mon-sb"],
    fontSize: 17,
  },
});
