import { SafeAreaView, ScrollView, View } from "react-native";
import ChooseLanguage from "../../components/enroll/chooseLanguage/ChooseLanguage";

function Enroll() {
  return (
    <SafeAreaView>
      <View style={{ padding: 12 }}>
        <ChooseLanguage />
      </View>
    </SafeAreaView>
  );
}

export default Enroll;
