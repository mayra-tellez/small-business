// export const userLogin = (user) => {
//   return {
//     type: 'USER_LOGIN',
//     value: user
//   }
// }

// export const userLogout = (user) => {
//   return {
//     type: 'USER_LOGOUT',
//     value: user
//   }
// }

export const addListing = (newListing) => {
  return {
    type: 'ADD_LISTING',
    value: newListing
  }
}

export const deleteListing = (index) => {
  return {
    type: 'DELETE_LISTING',
    value: index
  }
}