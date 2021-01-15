import React,{useState} from 'react';
import {ScrollView,Text,View,StyleSheet,Image,ImageBackground,Dimensions,TouchableOpacity} from 'react-native';
import {ListItem,Icon,CheckBox,Button} from 'react-native-elements';
import {useNavigation,useRoute} from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {FormInput} from '../components/ui/FormInput';
import {PhoneInput} from '../components/ui/PhoneInput';
import i18n from '../locals/i18n';
import {colors,Fonts} from '../utils/appTheme';

const LoginOption=({title,isChecked,onSelectOption})=>{
    return(
        <TouchableOpacity
            style={[styles.itemContainer,{borderColor:isChecked?colors.primary:colors.gray}]}
            onPress={onSelectOption}
        >
            <CheckBox
                containerStyle={{padding:0}}
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
                        color={colors.primary}
                    />
                }
            />
            <Text style={styles.option}>{title}</Text>
          
        </TouchableOpacity>
    )
}

export const Login=()=>{
    const route=useRoute()
    let userType=route?.params?.userType

    const [selectedLoginOption,setSelectedLoginOption]=useState('email')

    const { control, handleSubmit } = useForm({
       // resolver: yupResolver(schema)
    });

    const navigation=useNavigation()

    const schema = yup.object().shape({
        password: yup.string().required(()=>`${i18n.t('required-password')}`),
    });

    const onSubmit = (data) => {
        console.log("submitted-data is",data)
        userType==="s"?
        navigation.navigate('StudentTabNav'):
        navigation.navigate('TeacherTabNav')
    };

    return(
        <ImageBackground
            source={require('../../assets/images/bglogin.png')}
            style={{flex:1,paddingTop:15,paddingHorizontal:15}}
        >
            <ScrollView>

         
            <View style={styles.topSection}>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('chooseUserType')}
                >
                    <Image
                        source={require('../../assets/images/back.png')}
                    />
                </TouchableOpacity>              
                <Text style={styles.title}>{i18n.t('login')}</Text>
            </View>
            <Image 
                source={require('../../assets/images/logologinuser.png')}
                resizeMethod={"scale"}
                resizeMode={"center"}
                style={{alignSelf:"center"}}
            />
            <View style={styles.mainFormContainer}>
                <Text style={styles.txt}>{i18n.t('welcome-again')}</Text>
                <Text style={styles.txt1}>{i18n.t('login-by')}</Text>
                <View style={styles.loginOptionsContainer}>
                    <LoginOption
                        title={i18n.t('email')}
                        isChecked={selectedLoginOption==='email'}  
                        onSelectOption={()=>setSelectedLoginOption('email')}                      
                    />
                    <LoginOption
                        title={i18n.t('phone')}
                        isChecked={selectedLoginOption==='phone'}    
                        onSelectOption={()=>setSelectedLoginOption('phone')}                          
                    />
                </View>
                <View>
                    {selectedLoginOption==='email'?
                    <FormInput
                        name="email"
                        label={i18n.t('email')}
                        control={control}
                       // errors={errors}
                    />:
                    <PhoneInput
                        name="phone"
                        label={i18n.t('phone')}
                        control={control}
                      //  errors={errors}
                    />
                    }                 
                    <FormInput
                        name="password"
                        label={i18n.t('password')}
                        control={control}
                      //  errors={errors}
                       // secureTextEntry={true}
                    />
                    <View style={styles.forgetPassContainer}>
                        <Image
                            source={require('../../assets/images/forgotpass.png')}
                            resizeMethod={"scale"}
                            resizeMode={"center"}
                        />
                        <Button
                            title={`${i18n.t('forget-password')}`}
                            titleStyle={styles.forgetPassTitle}
                            type="clear"                         
                        />
                    </View>
                    <Button
                        title={`${i18n.t('login')}`}
                        titleStyle={styles.btnLoginTitle}  
                        buttonStyle={styles.btnLogin}     
                        onPress={handleSubmit(onSubmit)}              
                    />
                </View>
                <View style={styles.divider}/>

                {userType==='s'?
                <View style={styles.loginByGoogleContainer}>
                    <Text style={styles.orLogin}>{i18n.t('or-login-by')}</Text>
                    <Button
                        title={`Google`}
                        type="outline"
                        titleStyle={styles.btnGoogleTitle}  
                        buttonStyle={styles.btnGoogle} 
                        icon={
                            <Image
                                source={require('../../assets/images/google.png')}
                                style={{marginRight:15}}
                            />
                        }
                                          
                    />
                    <Text style={{marginTop:15}}>
                        <Text style={styles.orLogin}>{i18n.t('donot-have-account')}{`   `}</Text>
                        <Text  style={styles.createAccountText}>{i18n.t('create-account')}</Text>
                    </Text>
                </View>:null}
                        
            </View>
            </ScrollView>
        </ImageBackground>        
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    topSection:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20,
    },
    title:{
        flex:1,
        textAlign:"center",
        color:colors.white,
        fontSize:20,
        fontFamily:Fonts.Bold,
    },
    txt:{
        color:colors.black,
        fontSize:20,
        fontFamily:Fonts.Bold, 
    },
    txt1:{
        color:colors.black,
        fontSize:16,
        fontFamily:Fonts.Regular, 
    },
    loginOptionsContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:15
    },
    itemContainer:{
        width:"48%",
        flexDirection:"row",
        alignItems:"center",
        borderWidth:1,
        borderColor:colors.gray,
        borderRadius:35,
        padding:5,
        marginBottom:15
    },
    option:{
        color:colors.black,
        fontSize:13,
        fontFamily:Fonts.Regular,
    },
    mainFormContainer:{
        marginTop:20,
        backgroundColor: colors.white,
        borderRadius:10,
        paddingVertical:15,
        paddingHorizontal:10,
        marginBottom:50
    },
    forgetPassContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:15
    },
    forgetPassTitle:{
        color:colors.black,
        fontSize:14,
        fontFamily:Fonts.Regular,       
    },
    btnLogin:{
        backgroundColor: colors.primary,
        borderRadius:25
    },
    btnLoginTitle:{
        color:colors.white,
        fontSize:16,
        fontFamily:Fonts.Bold,
    },
    divider:{
        marginVertical:10,
        height:1,
        backgroundColor: colors.gray,
    },
    orLogin:{
        color:colors.black,
        fontSize:14,
        fontFamily:Fonts.Regular,
    },
    btnGoogle:{
        marginTop:10,
        marginLeft:5,
        padding:5,
        width:"40%",
        backgroundColor: colors.white,
        borderColor:"#DB4C3E",
        borderRadius:35,
        borderWidth:1
    },
    btnGoogleTitle:{
        color:"#DB4C3E",
        fontSize:16,
        fontFamily:Fonts.Regular,
    },
    createAccountText:{
        color:colors.primary,
        fontSize:14,
        fontFamily:Fonts.Bold,
    }

})