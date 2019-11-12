export const NotificationReduce=(state={notification:[]},action)=>{
    switch(action.type){
        case "Not_act" :
            return {notification:action.data};
            default :
            return state;
    }
}


