let fieldCardDisplayState = {

}

const initState = {
    FieldCardDisplay: {}
}


/////--ROOTREDUCER

const rootReducer = (state = initState, action) => {
        switch(action.type) {
            case "CHANGE_CARD_DISPLAY":
                return {
                    ...state,
                    FieldCardDisplay: action.payload
                }
        }
    }
    

export default rootReducer