import { View, Text, SafeAreaView } from "react-native";
import ChatPanel from "../../components/chat/chat-panel/ChatPanel";

function Chat() {
  // const glbAsset = Asset.fromModule(require("./path/to/your/file.glb"));
  //   await glbAsset.downloadAsync();
  //    const loader = new GLTFLoader();
  // const { scene } = await loader.parseAsync({ uri: glbAsset.localUri || glbAsset.uri });

  return (
    <SafeAreaView>
      <View>
        <ChatPanel />
      </View>
    </SafeAreaView>
  );
}

export default Chat;
