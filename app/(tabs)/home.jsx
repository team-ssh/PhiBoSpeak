import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Welcome from "../../components/home/welcome/Welcome";
import PopularLanguages from "../../components/home/popular/Popular";
import RecentLanguages from "../../components/home/recent/Recent";
import { COLORS } from "../../constants";

function Home() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 12 }}>
          <Welcome name="Shoon Lei" />
          <PopularLanguages />
          <RecentLanguages />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
