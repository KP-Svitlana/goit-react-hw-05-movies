import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  const onSearchFormSubmit = event => {
    event.preventDefault();
    setQuery(event.target.elements.input.value);
  };

  //   const handlerInput = event => {
  //     console.log(event);
  //   };

  return (
    <form className={css.searchForm} onSubmit={onSearchFormSubmit}>
      <input
        className={css.searchForm__input}
        type="text"
        name="input"
        // value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        // onChange={handlerInput}
      />

      <button type="submit" className={css.searchForm__btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
