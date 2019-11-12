import React,{ useState} from 'react'
import {View,TextInput,Button,StyleSheet,TouchableOpacity,Text} from 'react-native'

export const Notifypost=({addPost})=>{
    const [notify,setNotify]=useState("")
    return(
        <View style={{paddingTop:20}}>
            <TextInput placeholder="Type here....." style={styles.Input} onChangeText={(text)=>{setNotify(text)}} value={notify}></TextInput>
            <TouchableOpacity title="Add Post" style={styles.button} onPress={()=>{addPost(notify)}}><Text>Add</Text></TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    Input:{
        borderRadius:10,
        backgroundColor:'white',
        marginLeft:10,
        marginRight:10,
        marginTop:20,
        marginBottom:20
    },
    button:{
        backgroundColor:"white",
        color:"blue",
        alignItems:'center',
        justifyContent:'center',
        height:40,
        marginLeft:40,
        marginRight:40
    }
  
})