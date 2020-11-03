import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    loadingContainer: {
        backgroundColor: '#FFF',
        height: 90, 
        width: 90, 
        borderRadius: 20, 
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1, 
        backgroundColor: '#000', 
        opacity: 0.6, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    errorContainer: {
        height: 150, 
        paddingTop: 25,
        paddingHorizontal: 20, 
        width:300, 
        borderRadius: 22,  
        backgroundColor: '#FFF'
    },
    error: {
        fontSize: 20,
    },
    closeButton: {
        position: 'absolute',
        bottom: 30,
        left: 22,
    },
    closeText: {
        fontSize: 18,
        fontWeight: 'bold',
    } 
})