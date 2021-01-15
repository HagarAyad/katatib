import React,{useEffect, useState} from 'react';
import {ScrollView,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {ListItem,Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import i18n from '../locals/i18n';
import {colors,Fonts} from '../utils/appTheme';


const UserTypeItem=({title,imgSrc,isChecked,onSelectType})=>{
    return(
        <ListItem 
            Component={TouchableOpacity}
            containerStyle={styles.itemContainer}
            onPress={onSelectType}
        >
            <ListItem.CheckBox
                checked={isChecked}
                uncheckedIcon={
                    <Icon
                        type="entypo"
                        name="circle"
                        size={20}
                        color={colors.gray}
                    />
                }
                checkedIcon={
                    <Icon
                        name="dot-circle-o"
                        type="font-awesome"
                        size={20}
                        color={colors.gray}
                    />
                }
            />
            <ListItem.Content>
                <ListItem.Title style={styles.option}> {title}</ListItem.Title>
            </ListItem.Content>
            <Image
                source={imgSrc}
            />
        </ListItem>
    )
}

export const ChooseUserType=()=>{
    const navigation=useNavigation()
    const [selectedType,setSelectedType]=useState(" ")

    useEffect(()=>{
        selectedType===" "?null:
        navigation.navigate('Login',{userType:selectedType})
    },[selectedType])

    const _onSelectType=(option)=>{
        setSelectedType(option)       
    }

    return(
        <ScrollView style={styles.container}>
            <Image 
                source={require('../../assets/images/logolanguage.png')}
                resizeMethod={"scale"}
                resizeMode={"center"}
                style={{alignSelf:"center"}}
            />
            <Text style={styles.introTxt}>
                {i18n.t('welcome-text')}
            </Text>
            <Text style={styles.chooseText}>
                {i18n.t('choose-type')}
            </Text>
            <UserTypeItem
                title= {i18n.t('student')}
                isChecked={selectedType==="s"}
                onSelectType={()=>_onSelectType("s")}
                imgSrc={require('../../assets/images/student.png')}
            />
            <UserTypeItem
                title= {i18n.t('teacher')}
                isChecked={selectedType==="t"}
                onSelectType={()=>_onSelectType("t")}
                imgSrc={require('../../assets/images/techer.png')}
            />
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        flex:1,
        paddingTop:30,
        paddingHorizontal:20
    },
    introTxt:{
        marginTop:40,
        color:colors.black,
        fontSize:18,
        fontFamily:Fonts.Bold
    },
    chooseText:{
        marginTop:50,
        marginBottom:20,
        color:colors.black,
        fontSize:14,
        fontFamily:Fonts.Bold,
    },
    itemContainer:{
        borderWidth:1,
        borderColor:colors.gray,
        borderRadius:35,
        paddingVertical:5,
        paddingHorizontal:15,
        marginBottom:15
    },
    option:{
        color:colors.black,
        fontSize:14,
        fontFamily:Fonts.Regular,
    }
})