import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {Dispatch, UnknownAction, bindActionCreators} from 'redux';
import {StateTypes, changeUser} from '../../Store/actions';
import {CustomButton} from '../../Components';
import {strings} from '../../Constants';
import {SafeAreaView} from 'react-native-safe-area-context';

interface UserInputScreenProps {
  changeUser: (useName: string) => void;
  navigation: {
    goBack: () => void;
  };
}

const UserInputScreen = (props: UserInputScreenProps) => {
  const userData = useSelector((state: StateTypes) => state.userData);

  const [userName, setUserName] = useState(userData.userName ?? '');
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.userName}>{userData.userName}</Text>
        <View style={styles.body}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setUserName(text)}
            value={userName}
            placeholder="Enter UserName"
            placeholderTextColor={'white'}
            cursorColor={'white'}
          />
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Submit"
              type={strings.blue}
              onPress={() => {
                props.changeUser(userName);
                props.navigation.goBack();
              }}
            />
          </View>
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
      changeUser,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserInputScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaView: {flex: 1, backgroundColor: 'black'},
  textInput: {
    marginVertical: 20,
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  body: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  buttonContainer: {width: '80%'},
  userName: {
    position: 'absolute',
    marginVertical: 20,
    color: 'orange',
    fontSize: 20,
    alignSelf: 'flex-end',
  },
});
