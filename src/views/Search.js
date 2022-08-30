import debounce from 'lodash.debounce';

export const Search = () => {

  const handleChange = debounce((e) => {
    console.log('e:', e.target.value);
  }, 1000)

  return (
    <>
      <h2>Search</h2>
      <input type='text' onChange={handleChange} placeholder='search...'/>
    </>
  )
}