import apiManager from '../apiManager';
import routes from '../routes.json';

const getCategories = () => {
  console.log('get categories route');
  return apiManager.get({
    url: routes.categories,
  });
};

export default {getCategories};
