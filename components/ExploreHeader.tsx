import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Haptics from "expo-haptics";
import React, { FC, useRef, useState } from "react";
import { Colors, Fonts, Icons } from "@/constants";
import { router } from "expo-router";
import { categories } from "@/helpers";
import CategorieItem from "./CategorieItem";

interface IExploreHeader {
  onCategoryChange: (category: string) => void;
}

const ExploreHeader: FC<IExploreHeader> = ({ onCategoryChange }) => {
  const scrollRef = useRef<FlatList>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [indexCategorie, setIndexCategorie] = useState<number>(1);

  const selectCategorie = (index: number, name: string) => {
    const selected = itemsRef.current[index];
    setIndexCategorie(index);
    // selected?.measure(x => {
    //   scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
    // });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChange(name);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingLeft: 24, marginBottom: 10 }}>
        <TouchableOpacity
          style={styles.headerSearch}
          onPress={() => router.replace("(modals)/booking")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={Icons.IconSearch}
              style={styles.headerImage}
              tintColor={"black"}
            />
            <View style={styles.headerText}>
              <Text style={styles.textWhere}>Where to</Text>
              <Text style={styles.textFilter}>
                Anywhere.Any week.Add guests
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={categories}
          ref={scrollRef}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingLeft: 10 }}
          renderItem={({ item }) => (
            <CategorieItem
              ref={element => (itemsRef.current[indexCategorie] = element)}
              icon={item.icon}
              id={item.id}
              name={item.name}
              setIndexCategorie={(id: number, name: string) =>
                selectCategorie(id, name)
              }
              indexCategorie={indexCategorie}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </View>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 10,
    borderBottomColor: Colors.border.seconde,
    borderBottomWidth: 0.5,
    backgroundColor: "white",
  },
  headerSearch: {
    width: "90%",
    backgroundColor: "white",
    flexDirection: "row",
    height: 62,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: Colors.border.seconde,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 40,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  headerImage: {
    width: 18,
    height: 18,
  },
  headerText: {
    marginLeft: 10,
  },
  textWhere: {
    fontFamily: Fonts["mon-sb"],
  },
  textFilter: {
    fontSize: 13,
    fontFamily: Fonts.mon,
    color: Colors.grey,
  },
  optionIcon: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border.seconde,
    borderRadius: 50,
  },
});
