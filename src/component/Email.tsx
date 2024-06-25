import React from 'react';
import {  Text, TextInput } from 'react-native';
import { styles } from './style';
import { emailProps } from './interface';
//@ts-ignore
import _ from 'lodash'

const Email: React.FC<emailProps> = ({disable,email,isValidEmail,handleEmailChange  }) => {
    
     return (
        <React.Fragment>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={handleEmailChange}
                autoCapitalize="none"
                keyboardType="email-address"
                editable = {!disable}
            />
            {(!isValidEmail && !_.isEmpty(email)) && (
                <Text style={styles.errorText}>Please enter a valid email address.</Text>
            )}
        </React.Fragment>
        
    );
};

export default Email;
