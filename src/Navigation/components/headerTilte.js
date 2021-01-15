import React from 'react';
import {Text,StyleSheet} from 'react-native';
import {colors,Fonts} from '../../utils/appTheme';

const HeaderTitle=({title})=>{
    return(
        <Text style={styles.title}>
            {title}
        </Text>
    )
}

export default HeaderTitle

const styles=StyleSheet.create({
    title:{
        color:colors.white,
        fontSize:18,
        fontFamily:Fonts.Bold
    },
})