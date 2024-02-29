import { ChangeUserActionTypes, CHANGE_USER_SAGA } from "../actions";

export interface CounterState {
  userName: string | null;
}

const initialState: CounterState = {
  userName: null,
};

const userData = (
  state = initialState,
  action: ChangeUserActionTypes
): CounterState => {
  switch (action.type) {
    case CHANGE_USER_SAGA:
      return {
        ...state,
        userName: action.data,
      };

    default:
      return state;
  }
};

export default userData;
