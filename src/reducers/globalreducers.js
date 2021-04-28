import {snail_reducer} from './snailreducer'
import {fish_reducer} from './fishreducer'
import {util_reducer} from './utilityreducer'
import {crumb_reducer} from './crumbreducer'
import {coin_reducer} from './coinreducer'
import { combineReducers } from 'redux'
import {player_reducer} from './playerreducer'
import {alien_reducer} from './alienreducer'
import {timer_reducer} from './timer_reducer'
export default combineReducers({
    snail_reducer,
    fish_reducer,
    util_reducer,
    crumb_reducer,
    coin_reducer,
    player_reducer,
    alien_reducer,
    timer_reducer
})