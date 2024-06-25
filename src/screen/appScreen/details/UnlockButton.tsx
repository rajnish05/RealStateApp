import React from 'react';
import { View, Button, Alert } from 'react-native';
import { styles } from './style';
import { UnlockProps } from './interface';

const UnlockButton: React.FC<UnlockProps> = ({ unlocked = [],onPress }) => {
  
    if(!unlocked) {
        return <></>
    }

     return (
        <View style={styles.unlockButtonContainer}>
        <Button
          title="Unlock Details"
          onPress={onPress}
        />
      </View>
    );
};

export default UnlockButton;
