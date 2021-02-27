import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(44,44,44,0.7)',
  },
  main: {
    height: '45%',
    width: '100%',
    backgroundColor: 'white',
    opacity: 1,
  },
  closeIcon: {
    padding: 12,
    position: 'absolute',
    top: 30,
    right: 16,
  },
});

export default styles;
