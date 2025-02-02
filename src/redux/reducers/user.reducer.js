
//attached to user.router, login.saga.js, registration.saga.js
//attached to updateUser.saga, user.saga
const userReducer = (state = {}, action) => {
  console.log('userReducer', action.payload);
  
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userReducer;
