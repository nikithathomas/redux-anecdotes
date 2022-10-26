import AnecdoteFilter from './components/AnecdoteFilter'
import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch])
  return (
    <div>
      <Notification></Notification>
      <h2>Anecdotes</h2>
      <AnecdoteFilter></AnecdoteFilter>
      <Anecdotes></Anecdotes>
      <NewAnecdote></NewAnecdote>
    </div>
  )
}

export default App
