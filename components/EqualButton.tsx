import React, { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

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
  const equate = () => {
    let equals = eval(`${first}  ${operator} ${second}`).toString();
    setFirst(equals);
    setSecond(null);
    setOperator(null);
  };
  return (
    <Pressable
      style={[styles.button, isEnabled ? styles.dark : styles.light]}
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

export default EqualButton;
