import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const WebViewScreen = (props) => {
  const { selected, title } = props.route.params;
  props.navigation.setOptions({ title: title });
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: selected }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            color="#2294f2"
            size="large"
            style={{
              flex: 1,
              alignSelf: "center",
              justifyContent: "center",
              marginBottom: "55%",
            }}
          />
        )}
      />
      <BannerAd
        unitId="ca-app-pub-7992663111948996/5364535029"
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </View>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
