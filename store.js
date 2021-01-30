import { createStore, appMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import data from './data/data.json'

// initial states
const startState = {
  cards: [],
}

// redux actions
export const initialCards = () => {
  return {
    type: initialCards,
    cards: data,
  }
}

export const addItem = (item) => {
  return {
    types: 'ADDS',
    item,
  }
}

// redux reucers

// create store
export const initialStore = (initialState = startState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(appMiddleware(thunkMiddleware))
  )
}
