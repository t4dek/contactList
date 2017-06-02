import { BASE_URL } from '../constants';

export default class UserApi {
  static getAllUsers(){
    const url = `${ BASE_URL }/users`;
    return fetch(url).then(res => res.json());
  }
}
