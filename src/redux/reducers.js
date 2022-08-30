import { createReducer } from "@reduxjs/toolkit";
import { setValueAction } from "./actions";

const initialState = { value: '', count: 0}

export const reducer = createReducer(initialState, {
  [setValueAction]: (state, action) => {
    console.log('ACTION PAYLOAD:', action.payload);
    return { ...state, value: action.payload}
  }
})