import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';

// @ts-ignore
import CloseIcon from '../../../resources/svg/close_icon.svg';

import styles from './styles';

const ModalView = ({content, onPress, visible}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      presentationStyle="overFullScreen"
      animationType="fade">
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onPress} style={styles.closeIcon}>
          <CloseIcon />
        </TouchableOpacity>
        <View style={styles.main}>{content}</View>
      </View>
    </Modal>
  );
};

export default ModalView;
