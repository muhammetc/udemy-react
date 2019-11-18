import {combineReducers} from 'redux';
import AuthReducer from './authreducers';
import tweetListReducer from './tweetListReducer';
import MyTweetListReducer from './myTweetListReducer';


export default combineReducers({
    auth: AuthReducer,
    tweetList : tweetListReducer,
    myTweetList :MyTweetListReducer
});

