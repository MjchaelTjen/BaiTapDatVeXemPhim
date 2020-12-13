
// combineReducer là hàm từ redux
import { combineReducers } from 'redux'
// import 
import CinemaStickReducer from './CinemaStickReducer'

export const rootReducer = combineReducers({
    CinemaStickReducer // state bài tập dặt vé
});