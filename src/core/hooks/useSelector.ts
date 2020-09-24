import {
  useSelector as useSelectorRedux,
  TypedUseSelectorHook,
} from 'react-redux';

import { IStore } from 'core/store/interfaces/IStore';

const useSelector: TypedUseSelectorHook<IStore> = useSelectorRedux;

export default useSelector;
