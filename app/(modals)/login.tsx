import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors, Fonts } from "@/constants";

type Props = {};

const Login = (props: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.form}>
            <View style={styles.numberCountry}>
              <Text style={styles.numberLabel}>Country/Region</Text>
              <TextInput
                style={styles.numberInput}
                placeholderTextColor={"black"}
                placeholder="Morocco (+212)"
              />
            </View>
            <View style={styles.numberPhone}>
              <Text style={styles.numberLabel}>Phone number</Text>
              <TextInput
                style={styles.numberInput}
                placeholderTextColor={"black"}
                placeholder="0695208671"
              />
            </View>
          </View>
          <Text style={styles.confirmNumberText}>
            We'll call or text to confirm your number. Standard mesage and data
            rated apply
          </Text>
          <CustomButton title="Continue" />
          <View style={styles.orContainer}>
            <View style={styles.orLine}></View>
            <Text style={styles.orText}>or</Text>
            <View style={styles.orLine}></View>
          </View>
          <CustomButton
            bgVariante="seconde"
            textVariante="seconde"
            Icon={
              <MaterialCommunityIcons
                name="email-outline"
                size={23}
                color="black"
              />
            }
            title="Continue with Email"
          />
          <CustomButton
            bgVariante="seconde"
            textVariante="seconde"
            title="Continue with Apple"
            Icon={<AntDesign name="apple1" size={23} color="black" />}
          />
          <CustomButton
            bgVariante="seconde"
            textVariante="seconde"
            title="Continue with Google"
            Icon={<AntDesign name="google" size={23} color="black" />}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 26,
  },
  form: {
    paddingTop: 10,
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 10,
    // marginBottom: 30,
  },
  numberCountry: {
    borderBottomWidth: 1,
    borderBottomColor: "#ABABAB",
    paddingLeft: 10,
  },
  numberLabel: {
    fontFamily: Fonts.mon,
    fontSize: 13,
    color: Colors.grey,
  },
  numberPhone: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  numberInput: {
    height: 30,
    color: "black",
  },
  confirmNumberText: {
    color: "black",
    fontSize: 12,
    fontFamily: Fonts["mon"],
    marginTop: 4,
    marginBottom: 20,
  },
  orContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 4,
    marginBottom: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ABABAB",
  },
  orText: {
    fontSize: 14,
    fontFamily: Fonts["mon-sb"],
  },
});
