import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors, Fonts, Icons } from "@/constants";
import TabIcon from "@/components/TabIcon";

type Props = {};

const TabsLayout = (props: Props) => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: Fonts["mon-sb"],
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} icon={Icons.IconSearch} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: "Wishlist",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} icon={Icons.IconHeart} />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} icon={Icons.IconLogo} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} icon={Icons.IconMessage} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} icon={Icons.IconProfile} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
