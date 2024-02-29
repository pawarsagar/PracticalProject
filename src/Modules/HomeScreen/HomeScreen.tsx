import React, { useEffect } from "react";
import { Alert, Text, View } from "react-native";
import { connect, useSelector } from "react-redux";
import { Dispatch, UnknownAction, bindActionCreators } from "redux";
import { StateTypes } from "../../Store/actions";
import styles from "./HomeScreenStyles";
import { strings } from "../../Constants";
import { CustomButton, SlideButton } from "../../Components";
import { SafeAreaView } from "react-native-safe-area-context";

interface HomeScreenProps {
  navigation: {
    navigate: (screenName: string) => void;
  };
}

const HomeScreen = (props: HomeScreenProps) => {
  const userData = useSelector((state: StateTypes) => state.userData);

  const handlePress = (type: string) => {
    switch (type) {
      case strings.simple:
        props.navigation.navigate("UserInputScreen");
        break;
      case strings.black:
        props.navigation.navigate("CheckNativeCallbackScreen");
        break;
      case strings.blue:
        Alert.alert("Click Event", "You have clicked the button");
        break;
      default:
        Alert.alert("Click Event", "You have clicked the slider button");

        break;
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.userName}>{userData.userName}</Text>
        <View style={styles.body}>
          <Text style={styles.title}>{strings.homeScreenTitle}</Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              onPress={() => handlePress(strings.simple)}
              title="Update Username"
            />
            <CustomButton
              type={strings.black}
              title="Check Simulator/Emulator status"
              onPress={() => handlePress(strings.black)}
            />
            <CustomButton
              title="Alert Button"
              type={strings.blue}
              onPress={() => handlePress(strings.blue)}
            />
            <SlideButton onPressClick={() => handlePress("default")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

let mapStateToProps = (state: { userData: any }) => {
  return {
    userData: state.userData,
  };
};

let mapDispatchToProps = (dispatch: Dispatch<UnknownAction>) =>
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
