export const userLogin = (user) => {
  return {
    type: 'USER_LOGIN',
    value: user
  }
}

export const userLogout = (user) => {
  return {
    type: 'USER_LOGOUT',
    value: user
  }
}

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

export const fetchCoordinates = () => {
  return (dispatch) => {
    fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyCqxFMhz3e7AN8RcLM_03Igc7sMqe_qnCY&callback=handleApiLoaded')
      .then(res => res.json())
      .then(response => {
        const action = {
          type: 'FETCH_COORDINATES',
          value: response.Results
        }
        dispatch(action)
      })
  }
}