

const initState = {
    my: 'llll'
}


/////--ROOTREDUCER

const rootReducer = (state = initState, action) => {
         switch(action.type) {
             case "CHANGE_CARD_DISPLAY":
                 return {
                     fieldCardDisplay: action.payload
                 }
                
            
                    default: 
                        return state
                } 
         }
    
    

export default rootReducer