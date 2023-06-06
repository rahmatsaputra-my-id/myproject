import { DEFAULT_STATE } from '../../../configuration/reducer/state';
import { REDUCER_KEY } from '../../../constants/key/reducer_key';

export const loginReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REDUCER_KEY.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.data
      }

    default:
      return state;
  }
};
