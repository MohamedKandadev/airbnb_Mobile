import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC, forwardRef, Ref } from "react";
import { ICategorie } from "@/helpers";
import { Colors, Fonts } from "@/constants";

interface CategorieProps extends ICategorie {
  indexCategorie: number;
  setIndexCategorie: (id: number, name: string) => void;
}

const CategorieItem: FC<CategorieProps> = forwardRef(
  (
    { icon, id, name, indexCategorie, setIndexCategorie },
    ref: Ref<TouchableOpacity>
  ) => {
    return (
      <TouchableOpacity
        ref={ref}
        style={[
          styles.categorie,
          {
            borderBottomColor: indexCategorie === id ? "black" : "transparent",
            borderBottomWidth: indexCategorie === id ? 2 : 0,
          },
        ]}
        onPress={() => setIndexCategorie(id, name)}
      >
        <Image
          source={icon}
          style={styles.categorieIcon}
          tintColor={indexCategorie === id ? "black" : Colors.grey}
        />
        <Text
          style={[
            styles.categorieName,
            {
              color: indexCategorie === id ? "black" : Colors.grey,
              fontFamily: indexCategorie === id ? Fonts["mon-b"] : Fonts.mon,
            },
          ]}
        >
          {name}
        </Text>
      </TouchableOpacity>
    );
  }
);

export default CategorieItem;

const styles = StyleSheet.create({
  categorie: {
    paddingHorizontal: 18,
    paddingBottom: 4,
    alignItems: "center",
  },
  categorieIcon: {
    width: 22,
    height: 22,
    marginBottom: 6,
  },
  categorieName: {
    fontSize: 13,
    fontFamily: Fonts["mon-sb"],
    color: Colors.grey,
  },
});
