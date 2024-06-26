import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    flexDirection: 'row',
  },
  address: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  imageContainer: {
    marginBottom: 15,
  },
  details: {
    padding: 15,
  },
  gobackIcon: {
    height: 28,
    width: 28
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
  descriptionContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  price: {
    fontSize: 20,
    color: '#4CAF50',
    marginBottom: 8,
  },
  location: {
    fontSize: 18,
    color: '#888',
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detail: {
    fontSize: 16,
    color: '#444',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});