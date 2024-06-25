import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import { signInWithEmailAndPassword } from '../../services/AuthService';
import { isEmailValid } from '../../validation/emailValidation';
import { isPasswordValid } from '../../validation/passwordValidation';
// @ts-ignore
import _ from 'lodash'
import Email from '../../component/Email';
import Password from '../../component/Password';

const LoginScreen = ({ }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<Boolean>(false);
    const [isValidEmail, setIsValidEmail] = useState<Boolean>(false);
    const [isValidPassword, setIsValidPassword] = useState<Boolean>(false);

    const handleLogin = async () => {
        try {
            setLoading(true)
            await signInWithEmailAndPassword(email, password)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Login failed. Error:>>>>>', error);
        }
    };

    const disableLogin = React.useMemo(() => {
        return !isValidEmail || !isValidPassword
    }, [isValidEmail, isValidPassword])

    const handleEmailChange = (text: string) => {
        setEmail(text);
        setIsValidEmail(isEmailValid(text));
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        setIsValidPassword(isPasswordValid(text));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Email
                disable={loading}
                email={email}
                isValidEmail={isValidEmail}
                handleEmailChange={handleEmailChange}
            />
            <Password
                disable={loading}
                password={password}
                isValidPassword={isValidPassword}
                handlePasswordChange={handlePasswordChange}
            />
            <TouchableOpacity
                style={[styles.loginButton, disableLogin && styles.opacity05 ]}
                onPress={handleLogin}
                disabled={disableLogin}
            >
                {loading ?
                    <ActivityIndicator color={'white'} />
                    :
                    <Text style={styles.buttonText}>Login</Text>
                }
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
