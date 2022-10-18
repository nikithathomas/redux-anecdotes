import { useDispatch, useSelector } from 'react-redux'

const Anecdote = ({ anecdote, voteHandler }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => voteHandler(anecdote)}>vote</button>
      </div>
    </div>
  )
}
const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotesArray = useSelector(({ anecdotes, filter }) => {
    let dupeAnecdotes = [...anecdotes]
    if(filter.length){
      dupeAnecdotes = dupeAnecdotes.filter((anecdote) => {
        return anecdote.content.indexOf(filter) > -1 && anecdote
      })
    }   
    // seems like the array is immutable here for some reason most probably because of the redux toolkit previously was working fine
    return dupeAnecdotes.sort(
      (firstItem, secondItem) => secondItem.votes - firstItem.votes
    )
  })
  const voteForAnecdote = (anecdote) => {
    const anecdoteId = anecdote.id
    dispatch({ type: 'anecdotes/voteForAnecdote', payload: anecdoteId })
    dispatch({
      type: 'notification/notifyNotification',
      payload: `you voted for ${anecdote.content}`,
    })
    setTimeout(() => {
      dispatch({ type: 'notification/removeNotification' })
    }, 5000)
  }
  return (
    <div>
      {anecdotesArray.map((anecdote) => (
        <Anecdote
          anecdote={anecdote}
          key={anecdote.id}
          voteHandler={voteForAnecdote}
        ></Anecdote>
      ))}
    </div>
  )
}

export default Anecdotes
