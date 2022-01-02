const initialState = {
    age:21,
    history:[]
}

const reducer = (state=initialState,action) =>{
   const newState = {...state};
   switch(action.type){
       case "AGE_UP":
        //    newState.age += action.val;
      
            
             newState.age += action.val;
             newState.loading= false;
             
        
           break;
       case "AGE_DOWN":
        //    newState.age -= action.val; 
        
             newState.age -= action.val
            
        
           break;   
              case "LOADING":
                 newState.loading= true;          
        //    case "DEL_ITEM":
           
        //     return{
        //         ...state,
        //          history: state.history.filter(data => data.id !== action.key)
        //     }
        //        break; 
   }

//    if(action.type === "AGE_UP"){
//        newState.age += 1
//    }
//    if(action.type === "AGE_DOWN"){
//        newState.age -= 1
//    }
   return newState;
}

export default reducer;