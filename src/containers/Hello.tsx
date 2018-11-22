// src/containers/Hello.tsx
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Hello from '../components/hello2';
import * as actions from '../actions';
import { StoreState } from '../types/index';

export function mapStateToProps({ level, name }: StoreState) {
  return {
    level,
    name,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);