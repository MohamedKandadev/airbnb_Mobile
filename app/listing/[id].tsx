import {
  Dimensions,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation, useSegments } from "expo-router";
import listingData from "@/helpers/data/airbnb-listings.json";
import { IListing } from "@/types";
import Animated, {
  FadeInDown,
  interpolate,
  SlideInDown,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Colors, Fonts, Icons, IMAGESTYLES } from "@/constants";
import CustomButton from "@/components/CustomButton";

type Props = {};
const IMG_HEIGHT = 300;

const ListingDetails = (props: Props) => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const navigation = useNavigation();

  const listing = (listingData as IListing[]).find(
    (listing: IListing) => listing.id === id
  );
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });
  const shareListing = async () => {
    try {
      await Share.share({
        title: listing?.name,
        url: listing?.listing_url || "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.topBar}>
          <TouchableOpacity onPress={shareListing} style={styles.topBarButton}>
            <Image
              source={Icons.IconShare}
              tintColor={"black"}
              style={styles.topBarButtonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBarButton}>
            <Image
              source={Icons.IconHeart}
              tintColor={"black"}
              style={styles.topBarButtonIcon}
            />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity style={styles.topBarButton}>
          <Ionicons name="chevron-back" size={24} color={"black"} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        entering={FadeInDown}
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Animated.Image
          source={{ uri: listing?.xl_picture_url }}
          style={[styles.listingImage, imageAnimatedStyle]}
          resizeMode="cover"
        />
        <View style={styles.listingInfo}>
          <View style={styles.listingInfoItem}>
            <Text style={styles.listingName}>{listing?.name}</Text>
            <View style={styles.listingReviews}>
              <FontAwesome name="star" size={15} color="black" />
              <Text style={styles.listingRating}>
                {listing?.review_scores_rating}
              </Text>
              <Text>.</Text>
              <Text style={styles.listingNumberReviews}>
                {listing?.number_of_reviews} reviews
              </Text>
            </View>
            <Text style={styles.listingAddress}>
              {listing?.room_type} in {listing?.smart_location}
            </Text>
          </View>
          <View style={[styles.listingInfoItem, styles.hostView]}>
            <View style={styles.hostInfo}>
              <Text style={styles.hostName}>
                Hosted by {listing?.host_name}
              </Text>
              <Text>{listing?.host_location}</Text>
            </View>
            <Image
              source={{ uri: listing?.host_picture_url }}
              style={styles.hostImage}
            />
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Text style={styles.listingDesc}>{listing?.description}</Text>
          </View>
        </View>
      </Animated.ScrollView>
      <Animated.View entering={SlideInDown.delay(200)}>
        <View style={styles.footer}>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={styles.footerPrice}>${listing?.price} </Text>
              <Text style={{ fontSize: 18 }}>night</Text>
            </TouchableOpacity>
            <Text style={styles.footerDate}>Jun 25-30</Text>
          </View>
          <CustomButton title="Reserve" style={{ width: 100 }} />
        </View>
      </Animated.View>
    </View>
  );
};

export default ListingDetails;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  listingImage: {
    width: width,
    height: IMG_HEIGHT,
  },
  listingInfo: {
    paddingHorizontal: 20,
  },
  listingInfoItem: {
    paddingVertical: 20,
    borderBottomColor: Colors.border.seconde,
    borderBottomWidth: 1,
  },
  listingName: {
    fontFamily: Fonts["mon-b"],
    fontSize: 30,
    marginBottom: 15,
  },
  listingReviews: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    marginBottom: 10,
  },
  listingRating: {
    fontFamily: Fonts["mon"],
    fontSize: 17,
  },
  listingNumberReviews: {
    fontFamily: Fonts["mon-sb"],
    fontSize: 17,
  },
  listingAddress: {
    fontFamily: Fonts["mon"],
    fontSize: 17,
  },
  hostView: {
    flexDirection: "row",
  },
  hostImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  hostInfo: {
    flex: 1,
  },
  hostName: {
    fontSize: 20,
    fontFamily: Fonts["mon-b"],
  },
  listingDesc: {
    fontFamily: Fonts.mon,
  },

  /*****************
   * FOOTER STYLE
   *****************/
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderTopColor: Colors.border.primary,
    borderTopWidth: 0.5,
  },
  footerPrice: {
    fontFamily: Fonts["mon-sb"],
    fontSize: 22,
  },
  footerDate: {
    marginTop: 5,
    fontFamily: Fonts["mon-sb"],
    fontSize: 20,
  },

  /*****************
   * TOPBAR STYLE
   *****************/
  topBar: {
    flexDirection: "row",
    columnGap: 10,
  },
  topBarButton: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topBarButtonIcon: {
    width: 16,
    height: 16,
  },
});
