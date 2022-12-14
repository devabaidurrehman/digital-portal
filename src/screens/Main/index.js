import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { data } from "../../../res/data";
import {
  COLOR_WHITE,
  PAK_GOVT_GREEN_COLOR,
  PAK_GOVT_YELLOW_COLOR,
} from "../../../res/drawables";
import NetInfo from "@react-native-community/netinfo";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const { height, width } = Dimensions.get("window");

const Main = (props) => {
  const [isOffline, setIsOffline] = useState(false);
  useEffect(() => {
    connectionChecking();
  }, []);

  setStatusBarBackgroundColor(PAK_GOVT_GREEN_COLOR);

  const connectionChecking = () => {
    return NetInfo.addEventListener((state) => {
      console.log("Connection type Main:", state.type);
      console.log("Is connected?", state.isConnected);

      if (state.isConnected) {
        setIsOffline(false);
        props.navigation.navigate("Main");
      } else {
        setIsOffline(true);
        props.navigation.navigate("NetworkErrorScreen");
      }
    });
  };
  let arr = data.map(function (d) {
    return d;
  });

  const renderItem = ({ item }) => (
    <ImageBackground
      source={item.imgbg}
      borderRadius={10}
      style={styles.renderItemView}
    >
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate(item.screen, { title: item.source })
        }
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
          style={styles.gradientContainer}
        >
          <Text style={styles.renderItemText}>{item.source}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={styles.topHeading}>Welcome To</Text>
        <Text style={styles.topHeading2}>DIGITAL SERVICES PAKISTAN</Text>
      </View>
      {!isOffline ? (
        <FlatList
          style={{ alignSelf: "center" }}
          data={arr}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.message}>No Internet!</Text>
      )}
      <BannerAd
        unitId="ca-app-pub-7992663111948996/5364535029"
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </View>
  );
};

export default Main;
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  renderItemView: {
    margin: 4,
    marginTop: 16,
    marginBottom: 4,
    width: width / 3.4,
    borderRadius: 10,
    height: 140,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  renderItemImage: {
    width: 70,
    height: 70,
    alignSelf: "center",
  },
  renderItemText: {
    fontSize: 13,
    color: COLOR_WHITE,
    margin: 4,
    marginBottom: 8,
  },
  topHeading: {
    fontFamily: "sans-serif",
    fontSize: 15,
    color: PAK_GOVT_YELLOW_COLOR,
  },
  topHeading2: {
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "bold",
    color: PAK_GOVT_YELLOW_COLOR,
  },
  gradientContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textHeader: {
    paddingLeft: "5%",
    backgroundColor: PAK_GOVT_GREEN_COLOR,
    height: height / 7,
    justifyContent: "center",
    paddingTop: "8%",
  },
  message: {
    alignSelf: "center",
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "bold",
    color: PAK_GOVT_GREEN_COLOR,
    marginBottom: "70%",
  },
});
