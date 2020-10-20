import 'redux';
import { combineReducers } from 'redux';
import MovieReducer from './movieReducer'

export const reducers = combineReducers({ MovieReducer });