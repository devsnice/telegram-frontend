export const ACTIONS = {
  LOGIN_ATTEMPT: 'LOGIN_ATTEMPT',
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

const defaultState = {
  userIsAuth: false,
  error: null
};

const auth = (state = defaultState, action) => {
  const { payload } = action;

  switch (action.type) {
    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        userIsAuth: true
      };

    case ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        userIsAuth: false,
        error: payload.error
      };

    default:
      return state;
  }
};

export const loginAttempt = () => ({
  type: ACTIONS.LOGIN_ATTEMPT
});

export const login = () => ({
  type: ACTIONS.LOGIN
});

export default auth;
