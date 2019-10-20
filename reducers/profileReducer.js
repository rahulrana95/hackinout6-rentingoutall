const INITIAL_STATE = {
  name: '',
  profilePic: '',
  dob: '',
  address: '',
  contact: '',
  email: '',
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD':
      let tempState = Object.assign({}, state);
      tempState.isLoading = false;
      tempState = {
        ...tempState,
        ...action.payload,
      };
      return tempState;

    case 'LOADING':
      let tempStates = Object.assign({}, state);
      tempStates.isLoading = true;
      return tempStates;
    case 'FAILED':
      return Object.assign({}, state, {isLoading: false});
    default:
      return state;
  }
};

export default profileReducer;
