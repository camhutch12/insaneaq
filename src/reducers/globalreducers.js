import {snail_reducer} from './snailreducer'
import {fish_reducer} from './fishreducer'
import {util_reducer} from './utilityreducer'
import { combineReducers } from 'redux'

export default combineReducers({
    snail_reducer,
    fish_reducer,
    util_reducer,
})