// external
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// reducers
import { playerReducer, playlistReducer } from './reducers'

const reducer = combineReducers({
  player: playerReducer,
  playlist: playlistReducer,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
