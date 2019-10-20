import apiManager from '../apiManager';
import routes from '../routes.json';

const getProfileData = id => {
  return apiManager.get({
    url: routes.profile,
    path: [id],
  });
};

export default {getProfileData};
