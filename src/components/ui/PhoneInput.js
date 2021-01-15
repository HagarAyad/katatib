import React ,{useState} from 'react';
import {StyleSheet,Text} from 'react-native';
import {Controller } from "react-hook-form";
import {Input} from 'react-native-elements';
import CountryPicker from 'react-native-country-picker-modal'
import {colors,Fonts} from '../../utils/appTheme';

export const PhoneInput=({name,label,control,...rest})=>{
    const [countryCode, setCountryCode] = useState('SA')
    const [country, setCountry] = useState(null)
    const [withCountryNameButton, setWithCountryNameButton] = useState(false,)
    const [withFlag, setWithFlag] = useState(true)
    const [withEmoji, setWithEmoji] = useState(true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(false)
    const [withCallingCode, setWithCallingCode] = useState(true)

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
    }

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
                    leftIcon={
                        <CountryPicker
                            {...{
                                countryCode,
                                withFilter,
                                withFlag,
                                withCountryNameButton,
                                withAlphaFilter,
                                withCallingCode,
                                withEmoji,
                                onSelect,
                            }}
                            //visible   
                           // translation="urd"  
                            flatListProps={{style:{padding:15}}}                   
                        />
                    }
                    onChangeText={onChange} 
                    value={value} 
                    placeholder={label}
                    placeholderTextColor={colors.gray}
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    keyboardType={"numeric"}
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
    }
})