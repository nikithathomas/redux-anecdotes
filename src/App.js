import AnecdoteFilter from './components/AnecdoteFilter'
import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'

const App = () => {

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