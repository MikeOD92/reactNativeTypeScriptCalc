import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, View, Text } from "react-native";
import { useState } from "react";
import NumButton from "./components/NumButton";
import OperatorButton from "./components/OperatorButton";
import EqualButton from "./components/EqualButton";
import NegitivePositiveButton from "./components/NegitivePositiveButton";
import Clearbtn from "./components/Clearbtn";
import Percent from "./components/Percent";

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
  // make num buttons
  let numBtns = [];
  for (let i = 9; i > 0; i--) {
    numBtns.push(
      <NumButton
        key={`numbtn${i}`}
        num={i}
        first={first}
        setFirst={setFirst}
        second={second}
        setSecond={setSecond}
        operator={operator}
        isEnabled={isEnabled}
      />
    );
  }
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
      <View
        style={{
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Clearbtn
            setFirst={setFirst}
            setSecond={setSecond}
            setOperator={setOperator}
            isEnabled={isEnabled}
          />
          <NegitivePositiveButton
            first={first}
            setFirst={setFirst}
            second={second}
            setSecond={setSecond}
            operator={operator}
            isEnabled={isEnabled}
          />
          <Percent
            first={first}
            setFirst={setFirst}
            second={second}
            setSecond={setSecond}
            operator={operator}
            isEnabled={isEnabled}
          />
          <OperatorButton
            val="/"
            isEnabled={isEnabled}
            setOperator={setOperator}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            height: "100%",
            margin: 0,
          }}
        >
          <View style={styles.numpad}>
            {numBtns}
            <NumButton
              key={`numbtn.`}
              num={"."}
              first={first}
              setFirst={setFirst}
              second={second}
              setSecond={setSecond}
              operator={operator}
              isEnabled={isEnabled}
            />
            <NumButton
              key={`numbtn0`}
              num={0}
              first={first}
              setFirst={setFirst}
              second={second}
              setSecond={setSecond}
              operator={operator}
              isEnabled={isEnabled}
            />
          </View>
          <View style={styles.opPad}>
            <OperatorButton
              val="*"
              isEnabled={isEnabled}
              setOperator={setOperator}
            />
            <OperatorButton
              val="-"
              isEnabled={isEnabled}
              setOperator={setOperator}
            />
            <OperatorButton
              val="+"
              isEnabled={isEnabled}
              setOperator={setOperator}
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
          </View>
        </View>
      </View>

      <Switch
        style={styles.switch}
        trackColor={{ false: "#FFFFF", true: "#606060" }}
        thumbColor={isEnabled ? "#B8E7B1" : "#c99a60"}
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
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    top: 35,
  },
  switch: {
    position: "absolute",
    bottom: "8%",
  },
  bglight: {
    backgroundColor: "#F3D3BD",
    // color: "#000000",
  },
  bgdark: {
    backgroundColor: "#000000",
    // color: "#ffffff",
  },
  screen: {
    height: "20%",
    width: "100%",
    marginBottom: 15,
    padding: 25,
    fontSize: 32,
  },
  screendark: {
    backgroundColor: "#6D5F66",
    color: "#B8E7B1",
  },
  screenlight: {
    backgroundColor: "#1B2D2A",
    color: "#CEFF1A",
  },
  ///// key pad styling
  numpad: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "75%",
  },
  opPad: {
    height: "10%",
  },
});
