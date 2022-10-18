import { useDispatch } from 'react-redux'

const AnecdoteFilter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const filterStr = event.target.value
    dispatch({ type: 'filter/setFilter', payload: filterStr })
  }
  const style = {
    marginBottom: 10,
  }
  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}
export default AnecdoteFilter
