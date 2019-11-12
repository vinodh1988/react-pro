import {combineReducers,bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {NotificationReduce} from './Reducer'
import Notification from '../components/Notification'
import {Notifypost} from '../components/Notifypost'
import {NotificationPostAction,NotificationRegisterAction} from './Notifyact'
import  {Registration} from '../components/Registration'

export const state=combineReducers({
    Notifydata:NotificationReduce
})

const mapNotfytoProps=(store)=>{
  console
  .log(store.Notifydata.notification.length)
    return {notification:store.Notifydata.notification}
}

 const mapNotifytoAction=(dispatch)=>{
   return bindActionCreators({addPost:NotificationPostAction},dispatch)
 }
 const mapRegistertoAction=(dispatch)=>{
  return bindActionCreators({register:NotificationRegisterAction},dispatch)
}

 export const NotifyRedux=connect(mapNotfytoProps,null)(Notification)
 export const PostRedux=connect(null,mapNotifytoAction)(Notifypost)
 export const RegisterRedux=connect(null,mapRegistertoAction)(Registration)