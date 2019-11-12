import axios from 'axios'

const NotificationSet=(notification)=>{
    
    return{
        type:"Not_act",
        data:notification
    }
}

export const NotificationFin=()=>{
    return(dispatch)=>{
        axios.get('https://sheetdb.io/api/v1/is3i7exdl82wb').then(
            (response)=>{
                console.log("check")
                dispatch(NotificationSet(response.data))
            },
            ()=>{
                console.log("abcdf")
                dispatch(NotificationSet([]))}
        )
    }
}

 const RegisterPost=(register)=>{
   return{
       type:"register_msg",
       msg:""
   }
}

export const NotificationPostAction=(notification)=>{
    console.log("action called")
    console.log(notification)
    return(dispatch)=>{
        axios.post('https://sheetdb.io/api/v1/is3i7exdl82wb',{data:[{notification:notification}]}).then(
            (response)=>{
                console.log("response check")
                dispatch(NotificationFin())
            },
            ()=>{
               
                dispatch(NotificationFin())}
        )
    }
}
export const NotificationRegisterAction=(firstname,lastname,email,phonenum)=>{
   console.log(firstname,lastname)
    return(dispatch)=>{
        axios.post('https://sheetdb.io/api/v1/uyg23nx2p3ujs',{data:[{firstname:firstname,lastname:lastname,email:email,phonenum:phonenum}]}).then(
            (response)=>{
                
                dispatch(RegisterPost())
            },
            ()=>{
               
                dispatch(RegisterPost())}
        )
    }
}