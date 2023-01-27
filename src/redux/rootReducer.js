import SpellTrapCardk from "../components/cards/SpellTrapCard"

const index = 0

const playerCards = {
    monsters: ['l','l','','','',''],
    SpellTrapCards: ['','','','','','']
}

const turn =[
    "Draw Phase",
    "Standby Phase",
    "Main Phase 1",
    "Battle Phase",
    "Main Phase 2",
    "End Phase"
]


//INITIAL STATE
const initState = {
    turn :[
        "Draw Phase",
        "Standby Phase",
        "Main Phase 1",
        "Battle Phase",
        "Main Phase 2",
        "End Phase"
    ],
    phaseIndex: 1,
    turnPhases: [
        "Draw Phase",
        "Standby Phase",
        "Main Phase 1",
        "Battle Phase",
        "Main Phase 2",
        "End Phase"
    ],
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
    gamestate_test: 'yes',
    gamestate: {
        game_running: 'false',
        phase: turn[index]
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
            case "SET_MAGIC_TRAP_CARD":
                return {
                    ...state,
                    spellTrapCards: [...state.spellTrapCards, {...action.payload, set:true}]
                }
            case "START_GAME":
                return {
                    ...state,
                    gamestate: {
                        game_running: true
                    }
                    }
            case "INCREMENT_PHASE":
                return {
                    ...state,
                    phaseIndex: state.phaseIndex +1
                    }
            case "INCREMENT_PHASE_2":
                return {
                    ...state,
                    phaseIndex: state.phaseIndex +1,
                    gamestate: { 
                        game_running:true,
                        phase: turn[state.phaseIndex]
                    }
                    }
                    
            
                
            default: 
                return state
                } 
         }
    
    

export default rootReducer