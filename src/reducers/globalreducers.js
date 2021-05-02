/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import {snail_reducer} from './snailreducer'
import {fish_reducer} from './fishreducer'
import {util_reducer} from './utilityreducer'
import {crumb_reducer} from './crumbreducer'
import {blaster_reducer} from './blasterreducer'
import {coin_reducer} from './coinreducer'
import { combineReducers } from 'redux'
import {player_reducer} from './playerreducer'
import {alien_reducer} from './alienreducer'
import {timer_reducer} from './timer_reducer'
import {carnivore_reducer} from './carnivorereducer'
import {clam_reducer} from './clamreducer'
import {preggo_reducer} from './preggoreducer'
import {seahorse_reducer} from './seahorsereducer'
import {swordFish_reducer} from './swordfishreducer'
import {portal_reducer} from './portalreducer'
import {text_reducer} from './textreducer'
import {pearl_reducer} from './pearlreducer'
export default combineReducers({
    snail_reducer,
    fish_reducer,
    util_reducer,
    crumb_reducer,
    coin_reducer,
    player_reducer,
    alien_reducer,
    timer_reducer,
    blaster_reducer,
    carnivore_reducer,
    clam_reducer,
    preggo_reducer,
    seahorse_reducer,
    swordFish_reducer,
    portal_reducer,
    text_reducer,
    pearl_reducer,
});