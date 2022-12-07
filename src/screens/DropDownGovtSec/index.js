import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import {
  govtSecCustom,
  govtSecDriving,
  govtSecExciseTaxation,
  govtSecFBR,
  govtSecMOFA,
  govtSecNadra,
  govtSecPassport,
  govtSecVisa,
} from "../../../res/data";
import {
  CUSTOM_LOGO,
  DRIVING_LICENSE_LOGO,
  EXCISE_TAX_LOGO,
  FBR_LOGO,
  MOFA_LOGO,
  NADRA_LOGO,
  PASSPORT_LOGO,
  VISA_LOGO,
} from "../../../res/drawables";
import DropList from "../../Components/DropList";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const DropDownGovtSec = (props) => {
  const [selected, setSelected] = React.useState("");
  const { title } = props.route.params;
  props.navigation.setOptions({ title: title });
  let arr = govtSecDriving.map(function (d) {
    return d;
  });
  let arr1 = govtSecExciseTaxation.map(function (d) {
    return d;
  });
  let arr2 = govtSecNadra.map(function (d) {
    return d;
  });
  let arr3 = govtSecPassport.map(function (d) {
    return d;
  });
  let arr4 = govtSecVisa.map(function (d) {
    return d;
  });
  let arr5 = govtSecMOFA.map(function (d) {
    return d;
  });
  let arr6 = govtSecFBR.map(function (d) {
    return d;
  });
  let arr7 = govtSecCustom.map(function (d) {
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
            title={"Driving License"}
            logo={DRIVING_LICENSE_LOGO}
            setSelected={setSelected}
            data={arr}
            onSelect={() => nav(selected, "Driving License")}
          />
          <DropList
            title={"Excise,Tax & Narcotics Control Dept"}
            logo={EXCISE_TAX_LOGO}
            setSelected={setSelected}
            data={arr1}
            onSelect={() =>
              nav(selected, "Excise,Tax & Narcotics Control Dept")
            }
          />
          <DropList
            title={"Nadra"}
            logo={NADRA_LOGO}
            setSelected={setSelected}
            data={arr2}
            onSelect={() => nav(selected, "Nadra")}
          />
          <DropList
            title={"Passport"}
            logo={PASSPORT_LOGO}
            setSelected={setSelected}
            data={arr3}
            onSelect={() => nav(selected, "Passport")}
          />
          <DropList
            title={"Pakistan Visa Application"}
            logo={VISA_LOGO}
            setSelected={setSelected}
            data={arr4}
            onSelect={() => nav(selected, "Pakistan Visa Application")}
          />
          <DropList
            title={"MOFA"}
            logo={MOFA_LOGO}
            setSelected={setSelected}
            data={arr5}
            onSelect={() => nav(selected, "MOFA")}
          />
          <DropList
            title={"FBR"}
            logo={FBR_LOGO}
            setSelected={setSelected}
            data={arr6}
            onSelect={() => nav(selected, "FBR")}
          />
          <DropList
            title={"Custom"}
            logo={CUSTOM_LOGO}
            setSelected={setSelected}
            data={arr7}
            onSelect={() => nav(selected, "Custom")}
          />
        </View>
      </ScrollView>
      <BannerAd
        unitId="ca-app-pub-7992663111948996/5364535029"
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "3%",
  },
});

export default DropDownGovtSec;
