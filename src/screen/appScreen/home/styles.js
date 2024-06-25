import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 10,
      },
      list: {
        paddingBottom: 20,
      },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 20,
      elevation: 3, 
      shadowColor: '#000',  
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.1, 
      shadowRadius: 10, 
    },
    image: {
      width: '100%',
      height: 150,
    },
    infoContainer: {
      padding: 15,
    },
    address: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      marginTop: 5,
      color: '#777',
    },
  });