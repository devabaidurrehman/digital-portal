import React, { useEffect } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { BACKGROUND_COLOR, SPLASH_LOGO } from "../../../res/drawables";

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("Main");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={SPLASH_LOGO} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BACKGROUND_COLOR,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
export default Splash;
