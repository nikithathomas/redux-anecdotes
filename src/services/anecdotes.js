import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAnecdotes = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNewAnecdote = async (content) => {
  const newAnecdote = { content, votes: 0 }
  const response = await axios.post(baseUrl, newAnecdote)
  return response.data
}

const updateAnecdoteVotes = async (anecdote) => {
  const updatedAnecdote = {
    ...anecdote,
    votes: anecdote.votes + 1,
  }

  const anecdoteId = anecdote.id

  const response = await axios.put(`${baseUrl}/${anecdoteId}`, updatedAnecdote)
  return response.data
}
export default { getAnecdotes, createNewAnecdote, updateAnecdoteVotes }
