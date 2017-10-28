export const userAuthorized = (state = false, action) => {
  switch (action.type) {
  case 'AUTH_USER':
    return action.authorized
  default:
    return state
  }
}

export const userRegistered = (state = false, action) => {
  switch (action.type) {
  case 'REGISTRATION_SUCCESS':
    return action.registered
  default:
    return state
  }
}

export const userInfo = (state={}, action) => {
  switch (action.type) {
  case 'USER_INFO':
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      _id: action.payload._id,
      events: action.payload.calendarEvent
    }
  case 'REMOVE_USER_INFO':
    return {}
  default:
    return state
  }
}
