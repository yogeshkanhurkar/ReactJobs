import {StyleSheet} from 'react-native';
import {blue} from 'react-native-reanimated/src/reanimated2/Colors';

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
    },

    jobItem: {
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'beige',
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    jobTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: 'blue',
    },

    web: {
        flex: 1,
        justifyContent: 'center',
    },

    icon: {
        margin: 10,
        justifyContent: 'center',
    },

    fab: {
        justifyContent: 'center',
        color: 'white',
        margin: 10,
    },

    roundedView: {
        position: 'absolute',
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 60,
        bottom: 10,
        right: 10
    },

    activityIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
