import { createStore, applyMiddleware } from 'redux'
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
    type: 'INITIALCARDS',
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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALCARDS':
      return {
        cards: action.cards,
      }
    case 'ADD':
      return {
        ...state,
        cards: [...state.cards, action.item],
      }
    default:
      return state
  }
}

// create store
export const initStore = (initialState = startState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
