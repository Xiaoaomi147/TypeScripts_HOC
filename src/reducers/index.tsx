// src/reducers/index.tsx

import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    console.log('action',action,state)
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, level: state.level + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, level: Math.max(1, state.level - 1) };
  }
  return state;
}