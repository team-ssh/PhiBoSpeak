import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./chatPanel.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { COLORS } from "../../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setMessages([...messages, value]);
    setValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <View style={styles.message}>
          <View style={styles.response}>
            <Text style={styles.responseText}>
              What do you want to study today?
            </Text>
          </View>
        </View>
        {/* <View style={styles.message}>
          <Text>What do you want to study today?</Text>
        </View> */}
        {messages?.map((msg) => (
          <View style={styles.responseContainer} key={msg}>
            <View style={styles.response} key={msg}>
              <Text style={styles.responseText}>{msg}</Text>
            </View>
          </View>
        ))}
      </View>
      {/* <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Type your message"
            value={value}
            onChange={(e) => handleChangeValue(e)}
          />
        </View>
        <TouchableOpacity
          style={styles.inputBtn}
          onPress={() => router.push("/record")}
        >
          <MaterialIcons
            name="keyboard-voice"
            size={25}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputBtn} onPress={handleSubmit}>
          <FontAwesome size={20} name="send" color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      {/* </TouchableWithoutFeedback>
      </KeyboardAvoidingView> */}
    </View>
  );
}

export default ChatPanel;
