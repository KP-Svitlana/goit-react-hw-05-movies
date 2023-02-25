import css from './SearchForm.module.css';

const SearchForm = ({ onFormSabmit }) => {
  const onSearchFormSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.input.value;
    onFormSabmit(query);
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
      />

      <button type="submit" className={css.searchForm__btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
