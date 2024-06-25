import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    flexDirection:'row',
  },
  address: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center',
  },
  imageContainer: {
    marginBottom: 15,
  },
  details: {
    padding: 15,
  },
  gobackIcon:{
    height:28,
    width:28
  },
  breadcrumbs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#e0e0e0',
  },
  breadcrumb: {
    marginHorizontal: 5,
    color: '#333',
    textDecorationLine: 'underline',
  },
  unlockButtonContainer: {
    padding: 20,
    alignItems: 'center',
  },
});