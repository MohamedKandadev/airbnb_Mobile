import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors, Fonts } from "@/constants";

interface IHeaderModalTitle {
  index: number;
}

const HeaderModalTitle = ({ index = 0 }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={index === 0 ? styles.buttonActive : {}}>
        <Text
          style={[
            styles.button,
            index === 0 ? { color: "black" } : { color: Colors.border.primary },
          ]}
        >
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={index === 1 ? styles.buttonActive : {}}>
        <Text
          style={[
            styles.button,
            index === 1 ? { color: "black" } : { color: Colors.border.primary },
          ]}
        >
          Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderModalTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
  },
  button: {
    fontSize: 18,
    fontFamily: Fonts["mon-sb"],
  },
  buttonActive: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
});
