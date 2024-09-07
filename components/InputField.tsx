import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { FC } from "react";
import { IInputField } from "@/types";

const InputField: FC<IInputField> = ({
  placeholder,
  isSecur = false,
  ...props
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={isSecur}
      style={styles.input}
      {...props}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    marginBottom: 25,
  },
});
