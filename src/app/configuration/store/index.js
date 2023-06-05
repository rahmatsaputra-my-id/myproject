import { createStore } from 'redux';
import { Platform } from 'react-native';
import { defaultState, rootReducer } from '../reducer';
import { persistReducer, persistStore } from 'redux-persist';
import { REDUCER_KEY } from '../../constants/key/reducer_key';

let reducer = false;
if (Platform.OS == 'android' || Platform.OS == 'ios') {
  const createSensitiveStorage = require('redux-persist-sensitive-storage');
  const storageApp = createSensitiveStorage.default({
    keychainService: REDUCER_KEY.KEYCHAIN_SERVICE,
    sharedPreferencesName: REDUCER_KEY.SHARED_PREFERENCES_NAME
  });

  reducer = persistReducer(
    {
      key: REDUCER_KEY.REACT_APP,
      timeout: 30000,
      storage: storageApp
    },
    rootReducer
  );
}

const store = createStore(
  reducer,
  defaultState
);

const persistor = persistStore(store);
export { persistor, store };