import React from 'react';
import {Text,StyleSheet} from 'react-native';
import {colors,Fonts} from '../../utils/appTheme';

const TabBarLabel=({label,isFocused})=>{
    return(
        <Text style={isFocused?styles.labelFocused:styles.label}>
            {label}
        </Text>
    )
}

export default TabBarLabel

const styles=StyleSheet.create({
    label:{
        color:colors.gray,
        fontSize:10,
        fontFamily:Fonts.Regular
    },
    labelFocused:{
        color:colors.primary,
        fontSize:10,
        fontFamily:Fonts.Regular
    }
})