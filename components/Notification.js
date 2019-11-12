import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Fion from 'react-native-vector-icons/FontAwesome'
import {Notifybox} from './Notifybox'
export default Notification=({notification})=>{
    let code= notification.map((x,index)=><Notifybox message={x.notification} key={index}></Notifybox>)
    return(
        <View>
             {code}   
        </View>
    )
}

const  styles=StyleSheet.create({
    notbox:{
        borderRadius:10,
        marginRight:20,
        marginLeft:20,
       
        
    },
    boxes:{
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        borderColor:"black",
        backgroundColor:"white",
        minHeight:40,
        flexDirection:'column',
        paddingTop:10,
        
        
    }
})