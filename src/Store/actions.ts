export const CHANGE_USER = "CHANGE_USER";
export const CHANGE_USER_SAGA = "CHANGE_USER_SAGA";

interface ChangeUserAction {
  type: typeof CHANGE_USER_SAGA;
  data: string;
}

export type ChangeUserActionTypes = ChangeUserAction;

export type StateTypes = {
  [key: string]: { [key: string]: any };
};

export const changeUser = (data: string): ChangeUserAction => ({
  type: CHANGE_USER_SAGA,
  data: data,
});
