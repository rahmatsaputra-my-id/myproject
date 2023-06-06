
import { DEFAULT_STATE } from './state';
import { REDUCER_KEY } from '../../constants/key/reducer_key';
import { loginReducer } from '../../components/screens/LoginScreen/reducer';

const appReducer = (state = DEFAULT_STATE, action) => {
  let _state = loginReducer(state, action);

  switch (action.type) {
    case REDUCER_KEY.SET_WIDTH_LISTENER:
      _state = {
        ...state,
        widthListener: action.widthListener
      };
      break;
    case REDUCER_KEY.SELECTED_CONTACT_DATA:
      _state = {
        ...state,
        selectedContactData: action.selectedContactData
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