import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { IListing } from "@/types";
import Listings from "./Listings";
import { DefaultStyles } from "@/constants/Styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "@/constants";

interface IListingsBottomSheet {
  listings: IListing[];
  category: String;
}

const ListingsBottomSheet: FC<IListingsBottomSheet> = ({
  category,
  listings,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["8%", "100%"], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}
      style={styles.bottomStyle}
    >
      <Listings isLoading={false} listings={listings} />
      <View style={styles.buttomShowMapContainer}>
        <TouchableOpacity
          style={styles.buttomShowMap}
          onPress={() => bottomSheetRef.current?.collapse()}
        >
          <Text style={styles.buttomText}>Map</Text>
          <Ionicons name="map" size={20} color={"white"} />
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

export default ListingsBottomSheet;

const styles = StyleSheet.create({
  bottomStyle: {
    elevation: 4,
  },
  buttomShowMapContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  buttomShowMap: {
    backgroundColor: "black",
    width: 93,
    height: 44,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 17,
  },
  buttomText: {
    color: "white",
    fontFamily: Fonts["mon-b"],
    fontSize: 17,
  },
});
