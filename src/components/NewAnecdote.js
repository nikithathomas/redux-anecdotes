import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const NewAnecdote = () => {
  const dispatch = useDispatch()
  const createNewAnecdoteEvent = async (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.newAnecdote.value
    dispatch(createNewAnecdote(anecdoteContent));
    dispatch(setNotification(anecdoteContent,5));
  }
  return (
    <form onSubmit={createNewAnecdoteEvent}>
      <h2>create new</h2>
      <div>
        <input type="text" name="newAnecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

export default NewAnecdote
