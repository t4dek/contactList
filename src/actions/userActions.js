import UserApi from '../api/userApi';

export function loadUserDataSuccess(userData){
  return { type: 'LOAD_USER_DATA_SUCCESS', userData };
}

export function loadUserData(){
  return dispatch => {
    UserApi.getAllUsers().then(users => dispatch(loadUserDataSuccess(users)))
  }
}
