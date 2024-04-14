import { View, Text } from "react-native";
import Character from "../../components/select/character/Character";

function Select() {
  // const glbAsset = Asset.fromModule(require("./path/to/your/file.glb"));
  //   await glbAsset.downloadAsync();
  //    const loader = new GLTFLoader();
  // const { scene } = await loader.parseAsync({ uri: glbAsset.localUri || glbAsset.uri });

  return (
    <View>
      <Character />
      <Text>hehe</Text>
    </View>
  );
}

export default Select;
