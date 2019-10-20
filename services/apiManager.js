import axios from 'axios';
import config from './config.json';

const error = {
  default: {
    errorMessage: 'Minimum data not available',
    error: true,
  },
};

class ApiManager {
  get({url, queryParams = {}, path = []}) {
    if (!url) {
      return Promise.reject(error.default);
    }

    let newURLString = `${config.BASE_URL}${url}/`;
    path.forEach(p => {
      newURLString += `${p}/`;
    });
    let newURL = new window.URL(newURLString);

    Object.keys(queryParams).forEach(key => {
      newURL.searchParams.append(key, queryParams[key]);
    });
    console.log('url is ');
    console.log(newURL.href);
    return axios
      .get(newURL.href)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return {
          errorMessage: err,
          error: true,
        };
      });
  }

  post({url, queryParams = {}, path = []}) {
    if (!url) {
      return Promise.reject(error.default);
    }

    let newURLString = `${config.BASE_URL}${url}/`;
    path.forEach(p => {
      newURLString += `${p}/`;
    });
    let newURL = new window.URL(newURLString);

    Object.keys(queryParams).forEach(key => {
      newURL.searchParams.append(key, queryParams[key]);
    });

    console.log('url is ');
    console.log(newURL.href);
    return axios
      .post(newURL.href)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return {
          errorMessage: err,
          error: true,
        };
      });
  }
}

export default new ApiManager();
