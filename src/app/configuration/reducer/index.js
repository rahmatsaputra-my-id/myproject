
import { loginReducer } from '../../components/screens/LoginScreen/reducer';
import { DEFAULT_STATE } from './state';

const appReducer = (state = DEFAULT_STATE, action) => {
  let _state = loginReducer(state, action);

  switch (action.type) {
    case DEFAULT_STATE.widthListener:
      _state = {
        ...state,
        widthListener: action.widthListener
      };
      break;

    default:
      break;
  }

  state = { _state, ..._state };

  return state;
}

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export { DEFAULT_STATE, rootReducer };