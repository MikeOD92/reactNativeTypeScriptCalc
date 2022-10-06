import React, { FC } from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
const NegitivePositiveButton: FC<{
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
      } else if (first.length < 6) {
        if (first[0] !== "-") {
          setFirst("-" + first);
        } else {
          let val = first.split("");
          val.shift();
          setFirst(val.join(""));
        }
      }
    } else if (second === null) {
      return;
    } else if (second.length < 6) {
      if (second[0] !== "-") {
        setSecond("-" + second);
      } else {
        let val = second.split("");
        val.shift();
        setSecond(val.join(""));
      }
    }
  };
  return (
    <Pressable
      style={() => [
        styles.button,
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
        +/ -
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 0.5,
  },
  dark: {
    backgroundColor: "#4b31a0",
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

export default NegitivePositiveButton;
