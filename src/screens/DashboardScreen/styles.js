import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
      height: 300,
      backgroundColor: '#4c8bf5',
      borderBottomLeftRadius: 50,  
      borderBottomRightRadius: 50,  
      paddingTop: 150,
      paddingHorizontal: 25,
    },
    name: {
        color: 'white',
        fontSize: 40,
        fontWeight: '400',
    },
    email: {
        color: 'white',
        fontSize: 20
    },
    bottom: {
        paddingHorizontal: 35,
        marginTop: 60,
    }
})