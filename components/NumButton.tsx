import React, { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
const NumButton: FC<{
  num: number | string;
  first: string | null;
  second: string | null;
  operator: string | null;
  setFirst: Function;
  setSecond: Function;
  isEnabled: Boolean;
}> = ({ num, first, second, operator, setFirst, setSecond, isEnabled }) => {
  const handleInput = () => {
    if (!operator) {
      if (first === null) {
        setFirst(num.toString());
      } else if (first.length < 6) {
        setFirst(first + num.toString());
      }
    } else if (second === null) {
      setSecond(num.toString());
    } else if (second.length < 6) {
      setSecond(second + num.toString());
    }
  };
  return (
    <Pressable
      //   title={num.toString()}
      style={() => [styles.button, isEnabled ? styles.dark : styles.light]}
      onPress={() => {
        handleInput();
      }}
    >
      <Text style={[styles.txt, isEnabled ? styles.txtdark : styles.txtlight]}>
        {num}
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

export default NumButton;
