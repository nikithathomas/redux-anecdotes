import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addNewAnecdote(state, action) {
      return state.concat(action.payload)
    },
    voteForAnecdote(state, action) {
      const updatedAnecdote = action.payload
      
      return state.map((anecdote) => {
        return anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote
      })
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export default anecdoteSlice.reducer

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const allAnecdotes = await anecdotesService.getAnecdotes()
    dispatch({ type: 'anecdotes/setAnecdotes', payload: allAnecdotes })
  }
}

export const createNewAnecdote=(content)=>{
  return async(dispatch)=>{
    const newAnecdote = await anecdotesService.createNewAnecdote(content)
    dispatch({ type: 'anecdotes/addNewAnecdote', payload: newAnecdote })
  }
}

export const updateAnecdoteVotes=(anecdote)=>{
  return async(dispatch)=>{
    const updatedAnecdote=await anecdotesService.updateAnecdoteVotes(anecdote);
    dispatch({ type: 'anecdotes/voteForAnecdote', payload: updatedAnecdote })
  }
}
