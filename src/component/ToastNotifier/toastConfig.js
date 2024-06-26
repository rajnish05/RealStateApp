import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './toastNotifierStyles';
import { warningIcon } from '../../assets';

const toastConfig = {
  success: ({text1}) => {
    if (!text1 || text1 == '') return <></>;
    return (
      <View style={[styles.successWrapper]}>
        <View style={[styles.successContainer]}>
          <View style={[styles.content]}>
            <Text style={[styles.successTextStyle]}>{text1}</Text>
          </View>
        </View>
      </View>
    );
  },

  error: ({text1}) => {
    if (!text1 || text1 == '') return <></>;

    return (
      <View style={[styles.errorWrapper]}>
        <View style={[styles.errorContainer]}>
          <View style={[styles.content]}>
            <Text style={[styles.errorStyle]}>{text1}</Text>
          </View>
        </View>
      </View>
    )
  },
  warning: ({text1}) => {
    if (!text1 || text1 == '') return <></>;

    return (
      <View>
        <View style={[styles.containerStyle, styles.warningBorder]}>
          <View style={[styles.iconWrapper, styles.warningIconWrapper]}>
            <View style={styles.iconContent}>
              <Image source={warningIcon} style={styles.iconStyle} tintColor={'white'} />
            </View>
          </View>
          <View style={[styles.content, styles.warningContainer]}>
            <Text style={[styles.textStyle, styles.errorStyle]}>{text1}</Text>
          </View>
        </View>
      </View>
    );
  },
};

export default toastConfig;
