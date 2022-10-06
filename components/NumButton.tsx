import * as React from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
const NumButton: React.FC<{
  num: number | string;
  first: string | null;
  second: string | null;
  operator: string | null;
  setFirst: Function;
  setSecond: Function;
  isEnabled: Boolean;
}> = ({ num, first, second, operator, setFirst, setSecond, isEnabled }) => {
  // grab dimension
  const screen = Dimensions.get("window");
  const buttonWidth = screen.width / 4.05;

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
        {num}
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

export default NumButton;
