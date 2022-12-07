import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import {
  defenceDataARMY,
  defenceDataMOD,
  defenceDataNAVY,
  defenceDataPAF,
  defenceDataPOLICE,
} from "../../../res/data";
import {
  AIRFORCE_LOGO,
  ARMY_LOGO,
  MOD_LOGO,
  NAVY_LOGO,
  POLICE_LOGO,
} from "../../../res/drawables";
import DropList from "../../Components/DropList";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const DropDownDefence = (props) => {
  const [selected, setSelected] = React.useState("");
  const { title } = props.route.params;
  props.navigation.setOptions({ title: title });
  let arr = defenceDataARMY.map(function (d) {
    return d;
  });
  let arr1 = defenceDataPAF.map(function (d) {
    return d;
  });
  let arr2 = defenceDataNAVY.map(function (d) {
    return d;
  });
  let arr3 = defenceDataPOLICE.map(function (d) {
    return d;
  });
  let arr4 = defenceDataMOD.map(function (d) {
    return d;
  });

  const nav = (selected, title) => {
    props.navigation.navigate("WebViewScreen", { selected, title });
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <DropList
            title={"Pakistan Army"}
            logo={ARMY_LOGO}
            setSelected={setSelected}
            data={arr}
            onSelect={() => nav(selected, "Army")}
          />
          <DropList
            title={"Pakistan Air Force"}
            logo={AIRFORCE_LOGO}
            setSelected={setSelected}
            data={arr1}
            onSelect={() => nav(selected, "PAF")}
          />
          <DropList
            title={"Pakistan Navy"}
            logo={NAVY_LOGO}
            setSelected={setSelected}
            data={arr2}
            onSelect={() => nav(selected, "NAVY")}
          />
          <DropList
            title={"Police"}
            logo={POLICE_LOGO}
            setSelected={setSelected}
            data={arr3}
            onSelect={() => nav(selected, "POLICE")}
          />
          <DropList
            title={"Ministry of Defence"}
            logo={MOD_LOGO}
            setSelected={setSelected}
            data={arr4}
            onSelect={() => nav(selected, "MOD")}
          />
        </View>
      </ScrollView>
      <View style={styles.adds}>
        <BannerAd
          unitId="ca-app-pub-7992663111948996/5364535029"
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  adds: {
    width: "100%",
    height: 60,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
});

export default DropDownDefence;
