import { combineReducers } from "redux";
import { DATA_SUCESS } from './actions';

export const initialReducer = (state = {}, action) => {
    if (action.type = "DATA_SUCESS") {
        let upDatedState = { ...state }
        upDatedState.displayList = action.data;
        return upDatedState;
    }
    return state;

}


export const CombineReducers = combineReducers({ initialReducer });