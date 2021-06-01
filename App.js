import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import JobScreen from './src/components/JobScreen';
import JobDetails from './src/components/JobDetails';
import FavJobs from './src/components/FavJobs';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ReactJobs"
                    component={JobScreen}
                    options={
                        {}
                    }
                />
                <Stack.Screen
                    name="JobDetails"
                    component={JobDetails}
                    options={
                        {
                            headerShown: false,
                        }
                    }/>
                <Stack.Screen
                    name="FavJobs"
                    component={FavJobs}
                    options={
                        {
                            title: 'Favourite Jobs',
                        }
                    }/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
