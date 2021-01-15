import React from 'react';
//===Navigation
import { createStackNavigator } from '@react-navigation/stack';
//=== screens
import StudentSessions from '../screens/studentSessions';
//---
import HeaderTitle from './components/headerTilte';
import {colors,Fonts} from '../utils/appTheme';
import i18n from '../locals/i18n';

const Stack = createStackNavigator();

const SessionStack=()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="sessionsList" 
                component={StudentSessions} 
                options={{
                    headerTitle:()=>(<HeaderTitle title={i18n.t('my-sessions')}/>),
                    headerTitleAlign:"center",
                    headerLeft:null,
                    headerStyle:{
                        backgroundColor: colors.primary,                       
                    }
                }} 
            />
        </Stack.Navigator>
    );
}

export default SessionStack