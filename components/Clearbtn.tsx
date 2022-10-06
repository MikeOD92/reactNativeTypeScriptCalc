import React, { FC } from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
const Clearbtn: FC<{
  setOperator: Function;
  setFirst: Function;
  setSecond: Function;
  isEnabled: Boolean;
}> = ({ setFirst, setSecond, setOperator, isEnabled }) => {
  // grab dimension
  const screen = Dimensions.get("window");
  const buttonWidth = screen.width / 4.05;

  const handleInput = () => {
    setFirst(null);
    setSecond(null);
    setOperator(null);
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
        AC
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

export default Clearbtn;
