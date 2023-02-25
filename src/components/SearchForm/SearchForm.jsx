import { useSearchParams } from 'react-router-dom';
import css from './SearchForm.module.css';

const SearchForm = ({ onFormSabmit }) => {
  const [setSearchParams] = useSearchParams();

  const onSearchFormSubmit = event => {
    event.preventDefault();
    onFormSabmit(event.target.elements.input.value);
    event.target.reset();
  };

  return (
    <form className={css.searchForm} onSubmit={onSearchFormSubmit}>
      <input
        className={css.searchForm__input}
        type="text"
        name="input"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={e => setSearchParams({ name: e.target.value })}
      />

      <button type="submit" className={css.searchForm__btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
