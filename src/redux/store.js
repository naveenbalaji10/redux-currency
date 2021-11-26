import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { transferReducer } from './reducers/transferReducer'

const rootReducer = combineReducers({
  transfer: transferReducer,
})
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
