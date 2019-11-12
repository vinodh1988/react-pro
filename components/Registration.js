import React,{useState} from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView} from 'react-native'

export const Registration=({register})=>{
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmail]=useState("")
    const [phonenum,setPhonenum]=useState("")

    return(
        <View style={styles.container}>
            <ScrollView style={{paddingTop:80}}>
                <TextInput placeholder="first name" style={styles.input} onChangeText={(text)=>{setFirstname(text)}} value={firstname}></TextInput>
                <TextInput placeholder="last name" style={styles.input} onChangeText={(text)=>{setLastname(text)}} value={lastname}></TextInput>
                <TextInput placeholder="email" style={styles.input} onChangeText={(text)=>{setEmail(text)}} value={email}></TextInput>
                <TextInput placeholder="phone number" style={styles.input} onChangeText={(text)=>{setPhonenum(text)}} value={phonenum}></TextInput>
                <TouchableOpacity style={styles.button} onPress={()=>{register(firstname,lastname,email,phonenum)}}><Text>SUBMIT</Text></TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3b5998',
        paddingLeft:20,
        paddingRight:20
    },
    button:{
        backgroundColor:"yellow",
        color:"blue",
        alignItems:'center',
        justifyContent:'center',
        height:40,
       marginTop:60
    },
    input:{
        backgroundColor:'white',
        marginTop:30,
        borderRadius:10
    }
})