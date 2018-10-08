const SERVER_URL = 'http://localhost:3000/';

export class HttpService {
  static getResource(resourcePath, params = '') {
    return fetch(SERVER_URL + resourcePath + params).then(results => results.json());
  }
}