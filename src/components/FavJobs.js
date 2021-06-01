import React, {Component} from 'react';
import {Text, View, FlatList, ActivityIndicator, Alert} from 'react-native';
import styles from '../resources/Styles';
import CacheHelper from '../utils/CacheHelper';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon from 'react-native-vector-icons/Ionicons';

export default class FavJobs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        CacheHelper.getInstance().getAllFavJobs()
            .then(
                jobs => {
                    console.log('FavJobs =' + jobs);
                    this.setState({jobs: jobs});
                    this.setState({isLoading: false});
                })
            .catch(
                error => Alert.alert(error));
    }

    render() {
        const {jobs, isLoading} = this.state;

        return (
            <View>
                {!isLoading ? this.jobLists(navigator, jobs) :
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size="large" color="blue"/>
                    </View>}

            </View>
        );
    }

    jobLists(navigator, jobs) {
        return (
            <View>
                <FlatList data={jobs} renderItem={
                    ({item}) => this.jobItem(item)
                }/>
            </View>
        );
    }

    jobItem(item) {
        return (
            <View style={styles.jobItem}>
                <View style={{flex: 1}}>
                    <Pressable
                        onPress={() =>
                            this.props.navigation.navigate('JobDetails', {
                                job: item,
                                isFav: true,
                            })
                        }>
                        <Text style={styles.jobTitle}> {item.title}</Text>
                        <Text>Posted on : {item.date}</Text>
                    </Pressable>
                </View>
                <Icon
                    style={styles.icon}
                    name="heart"
                    size={30}
                    color="red"
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
}
