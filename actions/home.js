import allCategories from '../services/categories/allCategories';

const incrementAction = dispatch => {
  dispatch({
    type: 'INCREMENT',
  });
};

const getCategoriesAction = dispatch => {
  console.log('action get categories');
  // dispatch({
  //   type: 'LOADING',
  // });
  allCategories
    .getCategories()
    .then(response => {
      dispatch({
        type: 'FINISHED_LOADING',
        payload: response,
      });
    })
    .catch(error => {
      console.log('error of categiores');
      return error;
    });
};

export {incrementAction, getCategoriesAction};
