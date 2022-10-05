import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, View, Text } from "react-native";
import { useState } from "react";
import NumButton from "./components/NumButton";

export default function App() {
  // dark mode toggle
  const [isEnabled, setIsEnabled] = useState(false);
  // calculator states
  const [first, setFirst] = useState<string | null>(null);
  const [second, setSecond] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  // event functions
  const toggleDarkMode = () => {
    setIsEnabled(!isEnabled);
  };
  // create number pad
  const numbers = [];
  for (let i = 1; i < 10; i++) {
    numbers.push(
      <NumButton
        key={`number${i}`}
        num={i}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
    );
  }
  numbers.push(
    <NumButton
      key={`number0`}
      num={0}
      first={first}
      second={second}
      setFirst={setFirst}
      setSecond={setSecond}
      operator={operator}
      isEnabled={isEnabled}
    />
  );
  return (
    <View
      style={[styles.container, isEnabled ? styles.bgdark : styles.bglight]}
    >
      <Text
        style={[
          styles.screen,
          isEnabled ? styles.screendark : styles.screenlight,
        ]}
      >
        {first} {operator} {second}
      </Text>
      {numbers}
      <Switch
        trackColor={{ false: "#FFFFF", true: "#606060" }}
        thumbColor={isEnabled ? "#4b31a0" : "#c99a60"}
        onValueChange={toggleDarkMode}
        value={isEnabled}
      />
      <StatusBar animated={true} style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "5%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bglight: {
    backgroundColor: "#ffffff",
    // color: "#000000",
  },
  bgdark: {
    backgroundColor: "#000000",
    // color: "#ffffff",
  },
  screen: {
    height: "20%",
    width: "100%",
    margin: 15,
  },
  screendark: {
    backgroundColor: "#815889",
  },
  screenlight: {
    backgroundColor: "#BED1C8",
  },
});
