import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, View, Text } from "react-native";
import { useState } from "react";
import NumButton from "./components/NumButton";
import OperatorButton from "./components/OperatorButton";
import EqualButton from "./components/EqualButton";

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
      {/* ////////////// First Row */}
      <NumButton
        key={`number7`}
        num={7}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
      <NumButton
        key={`number8`}
        num={8}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
      <NumButton
        key={`number9`}
        num={9}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
      <OperatorButton val="/" isEnabled={isEnabled} setOperator={setOperator} />
      {/* ////////// second row */}
      <NumButton
        key={`number4`}
        num={4}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
      <NumButton
        key={`number5`}
        num={5}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
      <NumButton
        key={`number6`}
        num={6}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
      <OperatorButton val="*" isEnabled={isEnabled} setOperator={setOperator} />
      {/* //////// third row */}
      <NumButton
        key={`number1`}
        num={1}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
      <NumButton
        key={`number2`}
        num={2}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
      <NumButton
        key={`number3`}
        num={3}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
      <OperatorButton val="-" isEnabled={isEnabled} setOperator={setOperator} />
      {/* fourth row  */}
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
      <NumButton
        key={`number.`}
        num={"."}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
      <EqualButton
        isEnabled={isEnabled}
        first={first}
        setFirst={setFirst}
        second={second}
        setSecond={setSecond}
        operator={operator}
        setOperator={setOperator}
      />
      <OperatorButton val="+" isEnabled={isEnabled} setOperator={setOperator} />
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
    fontSize: 42,
  },
  screendark: {
    backgroundColor: "#815889",
  },
  screenlight: {
    backgroundColor: "#BED1C8",
  },
});
