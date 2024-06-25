import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333333',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 15,
        marginBottom: 15,
        borderRadius: 10,
        fontSize: 16,
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupButton: {
        marginTop: 20,
    },
    signupText: {
        color: '#007BFF',
        fontSize: 16,
        textDecorationLine: 'underline',
    }
});

export default styles