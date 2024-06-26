import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  successWrapper: {
    backgroundColor: "#fff",
    width: '92%',
    flexDirection: 'row',
    backgroundColor:'#4BB543'
  },
  errorWrapper: {
    backgroundColor: "#fff",
    width: '92%',
    flexDirection: 'row',
  },
  successContainer: {
    backgroundColor: "#4BB543",
    flex: 1,
    borderRadius: 4,
    flexDirection: 'row',
  },
  content: {
    width: '90%',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  successTextStyle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19,
    textAlign: 'center',
    color: '#fff',
    fontFamily:'Objectivity-Medium'
  },
  errorContainer: {
    backgroundColor: "#880808ab",
    flex: 1,
    borderRadius: 4,
    flexDirection: 'row',
  },
  errorStyle: {
    color: "#fff",
    fontWeight:'500'
  },
  containerStyle: {
    width: '92%',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#F5F5F5",
  },
  warningBorder: {
    borderColor: "#E57C00",
  },
  iconWrapper: {
    width: '10%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningIconWrapper: {
    backgroundColor: "#E57C00",
  },
  iconContent: {
    borderRadius: 100,
    alignSelf: 'center',
    padding: 5,
  },
  iconStyle: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  warningContainer: {
    backgroundColor: "#E57C00",
    opacity:0.7
  },
  textStyle: {
    paddingTop: 4,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 19,
    flex: 1,
  },
});

export default styles;
