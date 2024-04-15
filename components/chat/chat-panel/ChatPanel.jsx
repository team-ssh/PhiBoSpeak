import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import styles from "./chatPanel.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { COLORS } from "../../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { match } from "ts-pattern";

function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    setValue(e.nativeEvent.text);
  };

  const processMessage = (msg) => {
    console.log(msg);
    const response = match(
      msg
        .trim()
        // replace smart quote with regular quote
        .replace(/[\u2018\u2019]/g, "'")
    )
      .with(
        "I'd like to learn German",
        () =>
          "Sure! Let's start with the basics. What do you know about German?"
      )
      .with(
        "I know nothing",
        () => "No worries! Let's start with the alphabet."
      )
      .with("I know the alphabet", () => "Great! Let's move on to numbers.")
      .with("I know numbers", () => "Awesome! Let's move on to greetings.")
      .with("Cool", () => "Let's start with 'Hello'. Repeat after me: 'Hallo'.")
      .otherwise(
        () => "I'm sorry, I didn't understand that. Can you please repeat?"
      );
    return response;
  };

  const handleSubmit = () => {
    const response = processMessage(value);
    setMessages([
      ...messages,
      {
        sender: "user",
        message: value,
      },
      {
        sender: "bot",
        message: response,
      },
    ]);
    setValue("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.messageContainer}>
            {/* <View style={styles.message}> */}
            <View style={styles.message}>
              <Text style={styles.responseText}>
                What do you want to study today?
              </Text>
              {/* </View> */}
            </View>
            {/* <View style={styles.message}>
          <Text>What do you want to study today?</Text>
        </View> */}
            {messages?.map((msg, i) => (
              <View
                style={
                  msg.sender === "user" ? styles.userMessage : styles.message
                }
                key={i}
              >
                <View style={styles.response} key={msg}>
                  <Text style={styles.responseText}>{msg.message}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Type your message"
                value={value}
                onChange={(e) => {
                  handleChangeValue(e);
                }}
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
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default ChatPanel;
