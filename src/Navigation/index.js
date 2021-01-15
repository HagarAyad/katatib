import React from 'react';
//===Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//===Stack screens
import {ChooseUserType} from '../screens/chooseUserType';
import {Login} from '../screens/login';
import StudentTabNav from './StudentTabNav';
import TeacherTabNav from './TeacherTabNav';


const Stack = createStackNavigator();

const MainNavigator=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="chooseUserType" component={ChooseUserType} options={{headerShown:false}} />
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="StudentTabNav" component={StudentTabNav} options={{headerShown:false}} />
                <Stack.Screen name="TeacherTabNav" component={TeacherTabNav} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator


