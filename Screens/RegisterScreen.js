import React, { useLayoutEffect, useState } from 'react'
import { Input, Button, Text } from 'react-native-elements'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import {StatusBar} from 'expo-status-bar'
import { auth } from '../firebase'

const RegisterScreen = ({navigation}) => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[imgUrl,setImgUrl]=useState('')

    useLayoutEffect(() =>{
        navigation.setOptions({
           headerBackTitle: "Login" 
        });
    },[navigation])

    
    const register = () =>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName:name,
                photoURL: imgUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
            })
        })
        .catch((error)=>alert(error.message))
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="light"/>
            
            <Text h3 style={{marginBottom:50}}>
                Criar uma conta
            </Text>

            <View style={styles.inputContainer}>
                <Input placeholder="Nome Completo" 
                value={name}
                onChangeText={(text) => setName(text)}
                autoFocus 
                type="text"/>
                
                <Input placeholder="E-mail" 
                value={email}
                onChangeText={(text) => setEmail(text)}
              
                type="email"/>
                            
                <Input placeholder="Senha" 
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                type="password"/>
                           
                <Input placeholder="Url da imagem é opcional" 
                value={imgUrl}
                onChangeText={(text) => setImgUrl(text)}
                onSubmitEditing={register}
                type="text"/>
            </View>
        <Button
            containerStyle={styles.button}
            raised
            onPress={register}
            title='Registrar'
        />
        <View style={{ height:100 }}/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        padding:10,
        backgroundColor:'white',
    },
    button:{
        width:200,
        marginTop:10,
    },
    inputContainer:{
        width:300,
    },

    
})
