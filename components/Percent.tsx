import React, { FC } from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
const Percent: FC<{
  first: string | null;
  second: string | null;
  operator: string | null;
  setFirst: Function;
  setSecond: Function;
  isEnabled: Boolean;
}> = ({ first, second, operator, setFirst, setSecond, isEnabled }) => {
  // grab dimension
  const screen = Dimensions.get("window");
  const buttonWidth = screen.width / 4.05;

  const handleInput = () => {
    if (!operator) {
      if (first === null) {
        return;
      } else {
        setFirst((parseFloat(first) / 100).toString());
      }
    } else if (second === null) {
      return;
    } else {
      setSecond((parseFloat(second) / 100).toString());
    }
  };

  return (
    <Pressable
      style={() => [
        isEnabled ? styles.dark : styles.light,
        {
          width: buttonWidth,
          height: Math.floor(buttonWidth - 10),
          borderRadius: Math.floor(buttonWidth),
        },
      ]}
      onPress={() => {
        handleInput();
      }}
    >
      <Text style={[styles.txt, isEnabled ? styles.txtdark : styles.txtlight]}>
        %
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: "#4B544F",
  },
  light: {
    backgroundColor: "#c99a60",
  },
  txt: {
    fontSize: 38,
    textAlign: "center",
    alignSelf: "center",
    padding: "15%",
  },
  txtdark: {
    color: "#ffffff",
  },
  txtlight: {
    color: "#000000",
  },
});

export default Percent;
