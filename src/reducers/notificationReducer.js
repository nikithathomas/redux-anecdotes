import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    notifyNotification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return ''
    },
  },
})

export default notificationSlice.reducer

export const setNotification = (content, timeout) => {
  return (dispatch) => {
    dispatch({
      type: 'notification/notifyNotification',
      payload: `you voted for ${content}`,
    })
    setTimeout(() => {
      dispatch({ type: 'notification/removeNotification' })
    }, timeout * 1000)
  }
}
