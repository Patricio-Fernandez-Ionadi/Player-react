// external
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// reducers
import { playerReducer } from './reducers'

const reducer = combineReducers({
  player: playerReducer,
  // red2: reducerFile2 || {},
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
