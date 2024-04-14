import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../constants";

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          backgroundColor: COLORS.white,
          height: 90,
          borderTopWidth: 0,

          // paddingVertical: 5,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarItemStyle: { paddingVertical: 7 },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="study"
        options={{
          headerShown: false,
          title: "Study",
          tabBarItemStyle: { paddingVertical: 7 },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="book" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="enroll"
        options={{
          headerShown: false,
          title: "Enroll",
          tabBarItemStyle: { paddingVertical: 7 },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="wechat" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarItemStyle: { paddingVertical: 7 },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
