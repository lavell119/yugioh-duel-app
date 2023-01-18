import SpellTrapCardk from "../components/cards/SpellTrapCard"


const playerCards = {
    monsters: ['','','','','',''],
    SpellTrapCards: ['','','','','','']
}

const initState = {
    displayCard: {
        "name": "Blue Eyes White Dragon",
        "card_type": "monster",
        "monster_type": ["Dragon", "Normal"],
        "attack_points": 3000,
        "defense_points": 2500,
        "level": 8,
        "attribute": "LIGHT",
        "image": "/images/cards/blue_eyes_white_dragon.webp"
    },
    player1Cards: playerCards,
    playerCards2: playerCards

}


/////--ROOTREDUCER

const rootReducer = (state = initState, action) => {
         switch(action.type) {
             case "CHANGE_CARD_DISPLAY":
                 return {
                    ...state,
                    displayCard: action.payload
                 }
                
            
                    default: 
                        return state
                } 
         }
    
    

export default rootReducer