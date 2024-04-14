import { Redirect } from "expo-router";
import React from "react";
import GettingStarted from "../components/getting-started/GettingStarted";
import { View } from "react-native";

function Home() {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <GettingStarted />
    </View>
  );
}

export default Home;
