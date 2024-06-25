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
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 8,
      // backgroundColor: '#6200EE',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    logoutButton: {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
      
    },
    logoutIcon: {
      height:20,
      width:20,
      tintColor: '#F72585',
    },
    profileFilled : {
      height:20,
      width:20
    },
    profileContainer:{
      paddingHorizontal:10,
      alignItems:'center'
    },
  });