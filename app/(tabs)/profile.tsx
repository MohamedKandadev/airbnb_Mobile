import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { DefaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Fonts, Icons, Images } from "@/constants";
import { IProfileSettins, profileSettings } from "@/helpers";

type Props = {};

const Profile = (props: Props) => {
  return (
    <SafeAreaView
      style={[DefaultStyles.container, { backgroundColor: "white" }]}
    >
      <ScrollView>
        <View
          style={[
            DefaultStyles.container,
            { backgroundColor: "white", paddingTop: 80, paddingHorizontal: 20 },
          ]}
        >
          <Text style={styles.profileHeading}>Profile</Text>
          <View style={styles.editProfile}>
            <View style={styles.editProfileContent}>
              <Image source={Images.ImageProfile} style={styles.profileImage} />
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>Mohamed</Text>
                <Text style={styles.profileShow}>Show profile</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} />
          </View>
          <View style={styles.settingsContent}>
            <Text style={styles.settingsText}>Settings</Text>
            {profileSettings.map((item: IProfileSettins) => (
              <View key={item.id} style={styles.settingsItem}>
                <View style={styles.settingsItemLeft}>
                  <Image
                    source={item.icon}
                    style={styles.settingsItemIcon}
                    tintColor={"black"}
                  />
                  <Text style={styles.settingsItemLabel}>{item.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileHeading: {
    fontFamily: Fonts["mon-sb"],
    fontSize: 30,
    marginBottom: 40,
  },
  editProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomColor: Colors.border.seconde,
    borderBottomWidth: 1,
  },
  editProfileContent: {
    columnGap: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  profileInfo: {
    rowGap: 2,
  },
  profileName: {
    fontFamily: Fonts["mon"],
    fontSize: 17,
  },
  profileShow: {
    fontFamily: Fonts["mon"],
    fontSize: 14,
    color: Colors.grey,
  },

  /****************************
   *  Profile Settings Styles
   ****************************/
  settingsContent: {
    marginTop: 30,
  },
  settingsText: {
    fontFamily: Fonts["mon-sb"],
    fontSize: 23,
    marginBottom: 30,
  },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomColor: Colors.border.seconde,
    borderBottomWidth: 1,
  },
  settingsItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 13,
  },
  settingsItemIcon: {
    width: 24,
    height: 24,
  },
  settingsItemLabel: {
    fontFamily: Fonts["mon"],
    fontSize: 16,
  },
});
