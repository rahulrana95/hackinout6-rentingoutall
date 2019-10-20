const INITIAL_STATE = {
  loggedIn: false,
  email: '',
  isLogging: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('finishd loading');
      console.log(action.payload);
      return Object.assign({}, state, {
        isLogging: false,
        loggedIn: true,
        email: action.payload.email,
      });
    case 'LOGGING':
      return Object.assign({}, state, {isLogging: true});

    case 'FAIL':
      return Object.assign({}, state, {isLogging: false});
    default:
      return Object.assign({}, state);
  }
};

export default loginReducer;
