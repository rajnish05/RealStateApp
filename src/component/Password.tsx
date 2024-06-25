import React from 'react';
import {  Text, TextInput } from 'react-native';
import { styles } from './style';
import { passwordProps } from './interface';
//@ts-ignore
import _ from 'lodash'

const Password: React.FC<passwordProps> = ({disable, password,isValidPassword,handlePasswordChange  }) => {
    
     return (
        <React.Fragment>
           <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry
                editable = {!disable}
            />
            {(!isValidPassword && !_.isEmpty(password)) && (
                <Text style={styles.errorText}>{"Password must be at least 8 characters long and contain only alpha-numeric"}</Text>
            )}
        </React.Fragment>
        
    );
};

export default Password;
