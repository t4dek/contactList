export default function userReducer(state={}, action){
  switch(action.type) {
    case 'LOAD_USER_DATA_SUCCESS':
      return Object.assign({}, state, action.userData)
    default:
      return state;
  }
}
