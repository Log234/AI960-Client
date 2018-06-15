import { Reducer, AnyAction } from 'redux';
import { LayoutState, initialState, LayoutActionTypes } from 'app/Layout';
import { SetSocketAction, SetPositionAction } from '../Layout';

type KnownAction = SetSocketAction | SetPositionAction;

export const layoutReducer: Reducer<LayoutState> = (state: LayoutState | undefined, incomingAction: AnyAction) => {
    if (state === undefined) {
        state = initialState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case LayoutActionTypes.SetSocket:
            return {
                ...state,
                socket: action.socket
            };
        case LayoutActionTypes.SetPosition:
            return {
                ...state,
                position: action.position
            };
        default:
            return initialState;
    }
}
