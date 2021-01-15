import React from 'react';
import {StyleSheet,Text} from 'react-native';
import {Controller } from "react-hook-form";
import {Input} from 'react-native-elements';
import {colors,Fonts} from '../../utils/appTheme';

export const FormInput=({name,label,control,errors,...rest})=>{
    console.log("errors",errors)
    return(
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ onChange, value }) =>            
                <Input 
                    label={
                        <Text style={styles.label}>{label}</Text>
                    }
                    onChangeText={onChange} 
                    value={value} 
                  // errorMessage={errors[name] && errors[name]?.message}
                   errorStyle={styles.error}
                    placeholder={label}
                    placeholderTextColor={colors.gray}
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputContainer}                   
                    {...rest}
            />}
        />
    )
}

const styles=StyleSheet.create({
    inputContainer:{
        borderColor:colors.gray,
        borderWidth:1,
        borderRadius:25,
        paddingHorizontal:10
    },
    input:{
        color:colors.gray,
        fontSize:14,
        fontFamily:Fonts.Regular
    },
    label:{
        color:colors.primary,
        fontSize:14,
        fontFamily:Fonts.Bold,
        marginBottom:8
    },
    error:{
        color:"red",
        fontSize:10,
        fontFamily:Fonts.Regular,
    }

})