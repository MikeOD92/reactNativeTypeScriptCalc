import React, { FC } from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";

const EqualButton: FC<{
  isEnabled: Boolean;
  first: string | null;
  setFirst: Function;
  second: string | null;
  setSecond: Function;
  operator: string | null;
  setOperator: Function;
}> = ({
  isEnabled,
  first,
  setFirst,
  second,
  setSecond,
  operator,
  setOperator,
}) => {
  // grab dimension
  const screen = Dimensions.get("window");
  const buttonWidth = screen.width / 4.05;

  const equate = () => {
    if (first === null || second === null) {
      return;
    }
    let equals = eval(`${first}  ${operator} ${second}`).toString();
    setFirst(equals);
    setSecond(null);
    setOperator(null);
  };
  return (
    <Pressable
      style={[
        styles.button,
        isEnabled ? styles.dark : styles.light,
        {
          width: buttonWidth,
          height: Math.floor(buttonWidth - 10),
          borderRadius: Math.floor(buttonWidth),
        },
      ]}
      onPress={equate}
    >
      <Text style={[styles.txt, isEnabled ? styles.txtdark : styles.txtlight]}>
        =
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 0,
    // borderRadius: 100,
  },
  dark: {
    backgroundColor: "#4b31a0",
  },
  light: {
    backgroundColor: "#c99a60",
  },
  txt: {
    fontSize: 32,
    textAlign: "center",
    alignSelf: "center",
    padding: "19%",
  },
  txtdark: {
    color: "#ffffff",
  },
  txtlight: {
    color: "#000000",
  },
});

export default EqualButton;
