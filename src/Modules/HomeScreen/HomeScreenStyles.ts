import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: 'black'},
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  body: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  userName: {
    position: 'absolute',
    marginVertical: 20,
    color: 'orange',
    fontSize: 20,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: 'yellow',
  },
  buttonContainer: {
    width: '80%',
  },
});

export default styles;
