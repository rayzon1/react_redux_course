import * as PlayerActionTypes from '../actiontypes/player';

//! Inistion state for the player reducer.
const initialState = [   
    {
        name: 'Jim Hoskins',
        score: 31,
      },
      {
        name: 'Andrew Chalkley',
        score: 20,
      },
      {
        name: 'Alena Holligan',
        score: 50,
      },
];

export default function Player(state=initialState, action) {
    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER: //! creates new object action which adds to the store.
            return [
                ...state,
                {
                    name: action.name,
                    score: 0
                }
            ];

        case PlayerActionTypes.REMOVE_PLAYER:       //! Returns object at index 0 to index being removed.
            return [                                //! Returns index of object removed + 1. The action is being
                ...state.slice(0, action.index),    //! removed by only returning all objects EXCEPT for the chosen
                ...state.slice(action.index + 1)    //! player!
            ];
        
        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            return state.map((player, index) => {   //! Returns chosen player by INDEX then ...player = name plus
                if(index === action.index) {        //! the updated score!
                    return {
                        ...player,
                        score: player.score + action.score
                    }
                }
                return player;
            })
            
        default:
            return state;
    }
}