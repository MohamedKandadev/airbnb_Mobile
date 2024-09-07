import { StyleSheet } from "react-native";
import Colors from "./Colors";

export enum IMAGESTYLES {
  IMAGEHEIGHT = 300,
}

export const DefaultStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFF",
    borderTopColor: Colors.border.primary,
    borderTopWidth: 0.5,
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  flexRowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
