import { combineReducers, ReducersMapObject, AnyAction } from 'redux';
import { RootState } from './state';
import { routerReducer, RouterState } from 'react-router-redux';
import { layoutReducer } from 'app/reducers/LayoutReducer';
import { LayoutState } from 'app/Layout';

export { RootState, RouterState, LayoutState };

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  router: routerReducer as any,
  layout: layoutReducer as any
} as ReducersMapObject<RootState, AnyAction>);
