import { useDispatch } from 'react-redux'

const NewAnecdote = () => {
  const dispatch = useDispatch()
  const createNewAnecdote = (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.newAnecdote.value
    dispatch({ type: 'anecdotes/addNewAnecdote', payload: anecdoteContent })
    dispatch({
      type: 'notification/notifyNotification',
      payload: `you have created ${anecdoteContent}`,
    })
    setTimeout(()=>{
      dispatch({type: 'notification/removeNotification'})
    },5000);
  }
  return (
    <form onSubmit={createNewAnecdote}>
      <h2>create new</h2>
      <div>
        <input type="text" name="newAnecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

export default NewAnecdote
