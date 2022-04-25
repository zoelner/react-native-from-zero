import React from "react";
import { Button as ButtonRN, StyleSheet, Text, View } from "react-native";

type ButtonProps = {
  title: string;
  buttonText: string;
  onButtonPress: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { title, buttonText, onButtonPress } = props;

  return (
    <View>
      <Text style={styles.title}></Text>
      <ButtonRN title={buttonText} onPress={onButtonPress}></ButtonRN>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default Button;
