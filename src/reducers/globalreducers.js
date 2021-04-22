import {snail_reducer} from './snailreducer'
import {fish_reducer} from './fishreducer'
import {util_reducer} from './utilityreducer'
import {crumb_reducer} from './crumbreducer'
import {coin_reducer} from './coinreducer'
import { combineReducers } from 'redux'

export default combineReducers({
    snail_reducer,
    fish_reducer,
    util_reducer,
    crumb_reducer,
    coin_reducer,
})