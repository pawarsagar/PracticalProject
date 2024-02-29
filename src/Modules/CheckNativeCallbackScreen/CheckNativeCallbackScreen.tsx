import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {Dispatch, UnknownAction, bindActionCreators} from 'redux';
import {strings} from '../../Constants';
import {StateTypes, changeUser} from '../../Store/actions';
import {SafeAreaView} from 'react-native-safe-area-context';

interface CheckNativeCallbackScreenProps {
  route: {params: {isVirtualDevice: Boolean}};
}

const CheckNativeCallbackScreen = (props: CheckNativeCallbackScreenProps) => {
  const userData = useSelector((state: StateTypes) => state.userData);

  const {isVirtualDevice} = props?.route?.params ?? {};

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.userName}>{userData.userName}</Text>
        <View style={styles.body}>
          <Text
            style={
              styles.text
            }>{`${strings.virtualDevice}:- ${isVirtualDevice}`}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

let mapStateToProps = (state: {userData: any}) => {
  return {
    userData: state.userData,
  };
};

let mapDispatchToProps = (dispatch: Dispatch<UnknownAction>) =>
  bindActionCreators(
    {
      changeUser: () => {},
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckNativeCallbackScreen);

const styles = StyleSheet.create({
  container: {flex: 1},
  safeAreaView: {flex: 1, backgroundColor: 'black'},
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  userName: {
    position: 'absolute',
    marginVertical: 20,
    color: 'orange',
    fontSize: 20,
    alignSelf: 'flex-end',
  },
  text: {
    color: 'orange',
    fontSize: 20,
    textAlign: 'center',
  },
});
