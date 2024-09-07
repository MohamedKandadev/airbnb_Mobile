import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { Colors, Fonts } from "@/constants";
import { IButton } from "@/types";

const bgVarianteButton = (variante: string) => {
  switch (variante) {
    case "seconde":
      return {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        color: "black",
      };
    default:
      return {
        backgroundColor: Colors.primary,
      };
  }
};

const textVarianteButton = (variante: string) => {
  switch (variante) {
    case "seconde":
      return {
        color: "black",
      };
    default:
      return {
        color: "white",
      };
  }
};

const CustomButton: FC<IButton> = ({
  bgVariante = "primary",
  textVariante = "primary",
  Icon,
  title,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, bgVarianteButton(bgVariante), style]}
      onPress={onPress}
    >
      {Icon && <View style={styles.icon}>{Icon}</View>}
      <Text style={[styles.buttonText, textVarianteButton(textVariante)]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts["mon-sb"],
  },
  icon: {
    position: "absolute",
    top: "27%",
    left: 10,
  },
});
