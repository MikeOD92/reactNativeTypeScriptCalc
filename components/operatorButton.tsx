import React, { FC } from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";

const OperatorButton: FC<{
  val: string;
  setOperator: Function;
  isEnabled: Boolean;
}> = ({ val, setOperator, isEnabled }) => {
  // grab dimension
  const screen = Dimensions.get("window");
  const buttonWidth = screen.width / 4.05;

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
      onPress={() => setOperator(val)}
    >
      <Text style={[styles.txt, isEnabled ? styles.txtdark : styles.txtlight]}>
        {val}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 0.5,
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

export default OperatorButton;
