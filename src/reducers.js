import { combineReducers } from 'redux';  

import { SWORD_ADD, SWORD_ADD_ALL, SWORD_DELETE, SWORD_UPDATE_AVAILABILITY } from './actions';

function swords(state = [], action) {
	switch (action.type){
		case SWORD_ADD:
			return [
				...state, 
				{
					_id: action._id, 
					swordName: action.swordName, 
					swordType: action.swordType, 
					available: true 
				}
			]
		case SWORD_ADD_ALL:
			return [...action.sword_list]
		case SWORD_DELETE:
			return state.filter(function(sword) {
				return sword._id !== action._id;
			})
		case SWORD_UPDATE_AVAILABILITY:
			return state.map(function(sword) {
				if (sword._id === action._id) {
					return {...sword, available: !sword.available}
				}
				return sword
			})
		default:
			return state
	}
}

export default combineReducers({
	inventory: swords
})