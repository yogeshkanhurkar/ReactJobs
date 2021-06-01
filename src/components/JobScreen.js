import React, {Component} from 'react';
import {Text, View, FlatList, ActivityIndicator, Alert, Button} from 'react-native';
import styles from '../resources/Styles';
import DataSource from '../data/DataSource';
import CacheHelper from '../utils/CacheHelper';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Interactor from '../data/Interactor';
import Icon from 'react-native-vector-icons/Ionicons';

export default class JobScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        new Interactor(DataSource.getInstance()).getJobs(
            jobs => {
                this.setState({jobs: jobs});
                this.setState({isLoading: false});
            },
            error => {
                Alert(error);
            },
        );
    }

    render() {
        const {jobs, isLoading} = this.state;
        return (
            <View>
                {!isLoading ? this.jobLists(jobs) :
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size="large" color="blue"/>
                    </View>}

            </View>
        );
    }

    jobLists(jobs) {
        return (
            <View>
                <Button
                    title="View Favourite Jobs"
                    onPress={() => this.props.navigation.navigate('FavJobs')}/>
                <FlatList
                    data={jobs}
                    renderItem=
                        {
                            ({item}) => this.jobItem(item)
                        }
                />
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
                                isFav: false,
                            })
                        }>
                        <Text style={styles.jobTitle}> {item.title}</Text>
                        <Text>Posted on : {item.date}</Text>
                    </Pressable>
                </View>
                <Icon
                    style={styles.icon}
                    name="heart-outline"
                    size={30}
                    color="red"
                    onPress={
                        () =>
                            CacheHelper.getInstance().addJobToCache(item)
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
}
