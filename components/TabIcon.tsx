import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

interface ITabIcon {
  color: string;
  focused: boolean;
  icon: any;
}

const TabIcon: FC<ITabIcon> = ({ color, focused, icon }) => (
  <Image source={icon} style={styles.icon} tintColor={color} />
);

export default TabIcon;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    color: "black",
  },
});
