export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false
  }
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user'))
  } else {
    return false
  }
}

export const authenticate = (res, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(res))
    next()
  }
}
