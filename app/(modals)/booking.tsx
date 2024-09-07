import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { FC, useState } from "react";
import { BlurView } from "expo-blur";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import { useRouter } from "expo-router";
//@ts-ignore
import DatePicker from "react-native-modern-datepicker";

import { DefaultStyles } from "@/constants/Styles";
import CustomButton from "@/components/CustomButton";
import { Colors, Fonts, Icons } from "@/constants";
import InputField from "@/components/InputField";
import { guestsGropus, places } from "@/helpers";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const AnimationTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

interface CardItem {
  isOpen: boolean;
  setIndexOpen: () => void;
  buttonText: string;
  buttonDate: string;
  cardBodyText: string;
  children: React.ReactNode;
  animatedViewStyle?: ViewStyle;
}
const CardItem: FC<CardItem> = ({
  buttonDate,
  buttonText,
  cardBodyText,
  isOpen,
  setIndexOpen,
  children,
  animatedViewStyle,
}) => {
  return (
    <View style={[styles.card]}>
      {!isOpen && (
        <AnimationTouchableOpacity
          style={styles.buttonOpenCard}
          onPress={setIndexOpen}
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
          <Text style={styles.buttonDate}>{buttonDate}</Text>
        </AnimationTouchableOpacity>
      )}
      {isOpen && (
        <View style={[{ paddingVertical: 18 }]}>
          <Animated.Text entering={FadeIn} style={styles.cardBodyHeading}>
            {cardBodyText}
          </Animated.Text>
          <Animated.View style={animatedViewStyle}>{children}</Animated.View>
        </View>
      )}
    </View>
  );
};

const Booking = (props: Props) => {
  const [indexCardOpen, setIndexCardOpen] = useState<number>(-1);
  const [selectedPlace, setSelectedPlace] = useState<number>(-1);
  const [groups, setGroups] = useState(guestsGropus);
  const router = useRouter();

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <BlurView intensity={70} style={{ flex: 1, paddingTop: 100 }}>
      <View style={{ paddingHorizontal: 20, rowGap: 10 }}>
        {/* *** WHERE *** */}
        <CardItem
          isOpen={indexCardOpen === 0}
          setIndexOpen={() => setIndexCardOpen(0)}
          buttonText="Where"
          buttonDate="I'm flexible"
          cardBodyText="Where To?"
        >
          <View style={{ paddingHorizontal: 18 }}>
            <InputField placeholder="Search destination" />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: 25, paddingHorizontal: 18 }}
          >
            {places.map((place, index) => (
              <TouchableOpacity
                key={place.title}
                onPress={() => setSelectedPlace(index)}
              >
                <Image
                  source={place.img}
                  style={[
                    styles.placeImg,
                    selectedPlace === index ? { borderWidth: 2 } : {},
                  ]}
                />
                <Text
                  style={[
                    styles.placeLabel,
                    selectedPlace === index
                      ? { fontFamily: Fonts["mon-sb"] }
                      : {},
                  ]}
                >
                  {place.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </CardItem>

        {/* *** WHEN *** */}
        <CardItem
          isOpen={indexCardOpen === 1}
          setIndexOpen={() => setIndexCardOpen(1)}
          buttonText="When"
          buttonDate="Any week"
          cardBodyText="When's your trip?"
        >
          <DatePicker
            mode="calendar"
            options={{
              defaultFont: Fonts.mon,
              headerFont: Fonts["mon-sb"],
              borderColor: "transparent",
              mainColor: Colors.primary,
            }}
          />
        </CardItem>

        {/* *** WHO *** */}
        <CardItem
          isOpen={indexCardOpen === 2}
          setIndexOpen={() => setIndexCardOpen(2)}
          buttonText="Who"
          buttonDate="2 guests"
          cardBodyText="Who's coming?"
          animatedViewStyle={{ paddingHorizontal: 18 }}
        >
          {groups.map((item, index) => (
            <View
              style={[DefaultStyles.flexRowBetween, styles.guestItem]}
              key={index}
            >
              <View>
                <Text style={styles.guestItemLabel}>{item.name}</Text>
                <Text style={styles.guestItemCondition}>{item.text}</Text>
              </View>
              <View style={styles.guestItemChoose}>
                <TouchableOpacity style={styles.guestItemButton}>
                  <Ionicons
                    name="remove-circle-outline"
                    size={26}
                    color={"#cdcdcd"}
                  />
                </TouchableOpacity>
                <Text style={styles.guestItemNumber}>{item.count}</Text>
                <TouchableOpacity style={styles.guestItemChoose}>
                  <Ionicons
                    name="add-circle-outline"
                    size={26}
                    color={Colors.grey}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </CardItem>
      </View>

      <Animated.View
        entering={SlideInDown.delay(200)}
        style={[DefaultStyles.footer, DefaultStyles.flexRowBetween]}
      >
        <TouchableOpacity style={styles.footerClearButton}>
          <Text style={styles.footerClearButtonText}>Clear all</Text>
        </TouchableOpacity>
        <CustomButton
          title="Search"
          style={{ width: 100, marginBottom: 0 }}
          onPress={() => router.back()}
        />
      </Animated.View>
    </BlurView>
    // </SafeAreaView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  /******************
   *  CARDS STYLES
   ******************/
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 14,
    // shadowColor: "#000",
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    borderColor: Colors.border.seconde,
    borderWidth: 1,
  },
  buttonOpenCard: {
    paddingVertical: 20,
    paddingHorizontal: 14,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: Fonts["mon-sb"],
    fontSize: 14,
    color: Colors.grey,
  },
  buttonDate: {
    fontFamily: Fonts["mon-sb"],
    fontSize: 14,
    color: Colors.dark,
  },
  cardBodyHeading: {
    fontFamily: Fonts["mon-b"],
    fontSize: 24,
    paddingHorizontal: 18,
    marginBottom: 18,
  },
  placeImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderColor: Colors.border.primary,
    borderWidth: 0.5,
  },
  placeLabel: {
    fontFamily: Fonts["mon"],
    paddingTop: 10,
  },

  guestItem: {
    paddingVertical: 20,
  },
  guestItemLabel: {
    fontSize: 14,
    fontFamily: Fonts["mon-sb"],
    marginBottom: 4,
  },
  guestItemCondition: {
    fontSize: 14,
    fontFamily: Fonts["mon"],
    color: Colors.grey,
  },
  guestItemChoose: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  guestItemButton: {},
  guestItemNumber: {
    fontSize: 16,
    fontFamily: Fonts.mon,
  },

  /******************
   *  FOOTER STYLES
   ******************/
  footerClearButton: {
    paddingBottom: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  footerClearButtonText: {
    fontFamily: Fonts["mon-sb"],
    fontSize: 18,
  },
});
