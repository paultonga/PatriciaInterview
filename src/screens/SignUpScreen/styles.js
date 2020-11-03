import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        marginTop: 150,
        paddingHorizontal: 25,
        marginBottom: 50,
    },
    header: {
        fontSize: 45,
        fontWeight: '700',
        marginBottom: 10,
    },
    subtext: {
        fontWeight: '300',
        fontSize: 20,
    },
    buttonContainer: {
        paddingHorizontal: 35,
    },
    backButton: {
        position: 'absolute',
        top: 85,
        left: 25,
    },
    notice: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    noticeText: {
        fontSize: 16,
    },
});