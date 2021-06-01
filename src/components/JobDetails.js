import React from 'react';
import {WebView} from 'react-native-webview';
import {View, Alert} from 'react-native';
import styles from '../resources/Styles';
import CacheHelper from '../utils/CacheHelper';
import Icon from 'react-native-vector-icons/Ionicons';

function JobDetails({route}) {
    const {job, isFav} = route.params;

    function showRemoveButton() {
        return (
            <View
                style={styles.roundedView}>
                <Icon
                    style={styles.fab}
                    name="heart-outline"
                    size={30}
                    onPress={() =>
                        CacheHelper.getInstance().removeJobFromCache(item.id)
                            .then(() => {
                                Alert.alert('Removed From Favourite');
                            })
                            .catch(error => {
                                Alert.alert(error);
                            })
                    }
                />
            </View>
        );
    }

    function showAddButton() {
        return (
            <View
                style={styles.roundedView}>
                <Icon
                    style={styles.fab}
                    name="heart"
                    size={30}
                    onPress={() =>
                        CacheHelper.getInstance().addJobToCache(job)
                            .then(() => {
                                Alert.alert('Marked as favourite');
                            })
                            .catch(error => {
                                Alert.alert(error);
                            })
                    }
                />
            </View>
        );
    }

    return (
        <View style={styles.web}>
            <WebView source={{uri: job.url}}/>
            {!isFav ? showAddButton() : showRemoveButton()}
        </View>
    );
}

export default JobDetails;
