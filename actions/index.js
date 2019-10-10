import {generateUID} from '../utils/utils'

export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'

export function addDeck(deckTitle) {
  return {
    type: ADD_DECK,
    id: generateUID(),
    title: deckTitle
  }
}

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    id: id
  }
}

export function addCard(deckId, question, answer) {
  return {
    type: ADD_CARD,
    deckId: deckId,
    question: question,
    answer: answer
  }
}

export function handleAddDeck(deckTitle) {
  return (dispatch) => {
    return dispatch(addDeck(deckTitle))
  }
}

export function handleRemoveDeck(deckId) {
  return (dispatch) => {
    return dispatch(removeDeck(deckId))
  }
}

export function handleAddCard(deckId, question, answer) {
  return (dispatch) => {
    return dispatch(addCard(deckId, question, answer))
  }
}

