import axios from 'axios'

const fetchMiddleware = store => next => action => {
  if (!action.url || !Array.isArray(action.types)) {
    return next(action)
  }

  const [LOADING, SUCCESS, ERROR] = action.types

  next({
    type: LOADING,
    loading: true,
    ...action,
  })

  const method = action.method ? action.method : 'get'

  axios[method](action.url, { params: action.params })
    .then(response => {
      next({
        type: SUCCESS,
        loading: false,
        payload: response.data,
      })
    })
    .catch(err => {
      next({
        type: ERROR,
        loading: false,
        error: err,
      })
    })
}

export default fetchMiddleware
