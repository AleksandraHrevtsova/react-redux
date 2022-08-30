import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setValueAction } from '../redux/actions';

export const Search = () => {

  const dispatch = useDispatch();

  const handleChange = debounce((e) => {
    console.log('e:', e.target.value);
    dispatch(setValueAction(e.target.value))
  }, 1000)

  return (
    <>
      <h2>Search</h2>
      <input type='text' onChange={handleChange} placeholder='search...'/>
    </>
  )
}