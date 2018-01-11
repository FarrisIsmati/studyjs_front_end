import {
  TOGGLE_MODAL_CREATE_SUBTOPIC,
  TOGGLE_MODAL_ADD,
  TOGGLE_MODAL_CREATE
}                          from "../constants/constants"

const default_state = {
  modalAddShow: false,
  modalCreateShow: false,
  modalCreateSubtopicShow: false
}

export function uiReducer(state = default_state, action) {
  switch (action.type) {
    case TOGGLE_MODAL_CREATE_SUBTOPIC:
      return {
        ...state, ...{modalCreateSubtopicShow: !state.modalCreateSubtopicShow}
      }
    case TOGGLE_MODAL_ADD:
      return {
        ...state, ...{modalAddShow: !state.modalAddShow}
      }
    case TOGGLE_MODAL_CREATE:
      return {
        ...state, ...{modalCreateShow: !state.modalCreateShow}
      }
    default:
      return state
  }
}
