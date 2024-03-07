import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { strings } from "../Constants";

interface ButtonVariationsProps {
  type?: string;
  title: string;
  customStyles?: { [key: string]: string };
  onPress: () => void;
}

const SimpleButton = ({ title = "Press Me", customStyles = {} }) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.buttonContainer,
        styles.simpleButtonStyles,
      ])}
    >
      <Text
        style={StyleSheet.flatten([styles.standardButtonStyles, customStyles])}
      >
        {title}
      </Text>
    </View>
  );
};

const DarkButton = ({ title = "Press Me", customStyles = {} }) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.buttonContainer,
        styles.darkButtonStyles,
      ])}
    >
      <Text
        style={StyleSheet.flatten([styles.standardButtonStyles, customStyles])}
      >
        {title}
      </Text>
    </View>
  );
};

const BlueButton = ({ title = "Press Me", customStyles = {} }) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.buttonContainer,
        styles.blueButtonStyles,
      ])}
    >
      <Text
        style={StyleSheet.flatten([styles.standardButtonStyles, customStyles])}
      >
        {title}
      </Text>
    </View>
  );
};

const getButtonType = (type: string, title: string) => {
  switch (type) {
    case strings.simple:
      return <SimpleButton title={title} />;
    case strings.black:
      return <DarkButton title={title} />;
    case strings.blue:
      return (
        <BlueButton title={title} customStyles={styles.blueCustomStyles} />
      );
    default:
      return <SimpleButton title={title} />;
  }
};

const ButtonVariations = ({
  type = strings.simple,
  onPress = () => {},
  title,
}: ButtonVariationsProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {getButtonType(type, title)}
    </TouchableOpacity>
  );
};

export default ButtonVariations;

const styles = StyleSheet.create({
  standardButtonStyles: {
    fontSize: 20,
    color: "rgba(124, 177, 241, 1)",
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 10,
  },
  darkButtonStyles: {
    backgroundColor: "rgba(55,66,73,1)",
  },
  blueButtonStyles: {
    backgroundColor: "rgba(124,177,241,1)",
    marginVertical: 15,
  },
  simpleButtonStyles: {
    backgroundColor: "transparent",
  },
  blueCustomStyles: {
    color: "white",
  },
});
