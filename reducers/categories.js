const INITIAL_STATE = {
  data: [],
  isLoading: false,
};

const categoriesReducer = (
  state = INITIAL_STATE,
  action = {
    payload: [],
    type: '',
  },
) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {isLoading: true});
    case 'FINISHED_LOADING':
      //console.log('finishd loading');
      //console.log(action.payload);
      state.isLoading = false;
      state.data = action.payload;
      return Object.assign({}, state);
    default:
      return Object.assign({}, state);
  }
};

export default categoriesReducer;
