import apiManager from '../apiManager';
import routes from '../routes.json';

const getLoginData = email => {
  return apiManager.post({
    url: routes.login,
    path: [email],
  });
};

export default {getLoginData};
