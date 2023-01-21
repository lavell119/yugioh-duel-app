import SpellTrapCardk from "../components/cards/SpellTrapCard"


const playerCards = {
    monsters: ['l','l','','','',''],
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
    
    monsters: [],
    spellTrapCards: [],
    gamestate: {
        game_running: false
    }

}


/////--ROOTREDUCER

const rootReducer = (state = initState, action) => {
         switch(action.type) {
            case "CHANGE_CARD_DISPLAY":
                 return {
                    ...state,
                    displayCard: action.payload
                 }
               
            case "SUMMON_CARD":
                 return {
                    ...state,
                    monsters: [...state.monsters, action.payload]
                 }
            case "SET_MAGIC_TRAP_CARD":
                return {
                    ...state,
                    spellTrapCards: [...state.spellTrapCards, {...action.payload, set:true}]
                }
            default: 
                return state
                } 
         }
    
    

export default rootReducer