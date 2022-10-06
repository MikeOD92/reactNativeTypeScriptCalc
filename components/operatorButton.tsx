import React, { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const OperatorButton: FC<{
  val: string;
  setOperator: Function;
  isEnabled: Boolean;
}> = ({ val, setOperator, isEnabled }) => {
  return (
    <Pressable
      style={[styles.button, isEnabled ? styles.dark : styles.light]}
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
    margin: "1%",
    borderRadius: 5,
    width: "20%",
    height: "10%",
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
    padding: "5%",
  },
  txtdark: {
    color: "#ffffff",
  },
  txtlight: {
    color: "#000000",
  },
});

export default OperatorButton;
