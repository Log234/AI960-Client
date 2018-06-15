import { RouterState } from 'react-router-redux';
import { LayoutState } from 'app/Layout';

export interface RootState {
  router: RouterState;
  layout: LayoutState;
}
