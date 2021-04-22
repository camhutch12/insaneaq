import {snail_reducer} from './snailreducer'
import {fish_reducer} from './fishreducer'
import { combineReducers } from 'redux'

export default combineReducers({
    snail_reducer,
    fish_reducer
})