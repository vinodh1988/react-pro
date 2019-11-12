import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Fion from 'react-native-vector-icons/FontAwesome'


export const Notifybox=({message})=>{
   
    return(
        <View style={styles.boxes}>
            <Icon name="md-notifications" size={25} style={{paddingLeft:10,alignItems:'center',justifyContent:'center'}}/>
        
         
            <Text style={{fontWeight:'800',fontSize:20,paddingLeft:20}}>{message}</Text> 
        
        </View>
    )
}

const  styles=StyleSheet.create({
   
    boxes:{
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        borderColor:"black",
        backgroundColor:"white",
        minHeight:40,
        flexDirection:'row',
        paddingTop:10,
        
        
    }
})