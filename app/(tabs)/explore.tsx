import { SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import ExploreHeader from "@/components/ExploreHeader";
import listingsData from "@/helpers/data/airbnb-listings.json";
import listingsGeo from "@/helpers/data/airbnb-listings.geo.json";
import Listings from "@/components/Listings/Listings";
import ListingsMap from "@/components/Listings/ListingsMap";
import ListingsBottomSheet from "@/components/Listings/ListingsBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Props = {};

const Explore = (props: Props) => {
  const items = useMemo(() => listingsData as any, []);
  const [category, setCategory] = useState<String>("Cabins");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, [category]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ExploreHeader
        onCategoryChange={(category: string) => setCategory(category)}
      />
      <GestureHandlerRootView>
        {/* <Listings isLoading={isLoading} listings={items} /> */}
        <ListingsMap listings={listingsGeo} />
        <ListingsBottomSheet category={category} listings={items} />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
