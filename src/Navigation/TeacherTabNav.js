import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import EmptyScreen from '../screens/emptyScreen';
import TabBarLabel from './components/tabBarLabel';
import i18n from '../locals/i18n';

const Tab = createBottomTabNavigator();

const TeacherTabNav=()=>{
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={EmptyScreen} 
            options={{
                tabBarLabel:({focused})=>(<TabBarLabel isFocused={focused} label={i18n.t('home')}/>),
                tabBarIcon:({focused})=>(
                    <Image
                        source={focused?require('../../assets/images/homeactive.png'):require('../../assets/images/home.png')}
                    />
                    
                )
            }}
        />
        <Tab.Screen 
            name="reading" 
            component={EmptyScreen} 
            options={{
                //tabBarLabel:"طلبات الجلسات",
                tabBarLabel:({focused})=>(<TabBarLabel isFocused={focused} label={i18n.t('requests')}/>),
                tabBarIcon:({focused})=>(
                    <Image
                        source={focused?require('../../assets/images/requestsactive.png'):require('../../assets/images/requests.png')}
                    />
                    
                )
            }}
        />
        <Tab.Screen 
            name="sessions" 
            component={EmptyScreen} 
            options={{
                tabBarLabel:({focused})=>(<TabBarLabel isFocused={focused} label={i18n.t('my-sessions')}/>),
                tabBarIcon:({focused})=>(
                    <Image
                        source={focused?require('../../assets/images/setionsactive.png'):require('../../assets/images/setions1.png')}
                    />
                    
                )
            }}
        />
        <Tab.Screen 
            name="setting" 
            component={EmptyScreen} 
            options={{
                tabBarLabel:({focused})=>(<TabBarLabel isFocused={focused} label={i18n.t('setting')}/>),
                tabBarIcon:({focused})=>(
                    <Image
                        source={focused?require('../../assets/images/settingsactive.png'):require('../../assets/images/settings.png')}
                    />
                    
                )
            }}
        />
    </Tab.Navigator>
  );
}

export default TeacherTabNav