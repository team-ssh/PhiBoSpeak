import { View, Text, SafeAreaView } from "react-native";
import Recording from "../../components/record/Recording/Recording";

function Record() {
  // const glbAsset = Asset.fromModule(require("./path/to/your/file.glb"));
  //   await glbAsset.downloadAsync();
  //    const loader = new GLTFLoader();
  // const { scene } = await loader.parseAsync({ uri: glbAsset.localUri || glbAsset.uri });

  return (
    <SafeAreaView>
      <View>
        <Recording />
      </View>
    </SafeAreaView>
  );
}

export default Record;
