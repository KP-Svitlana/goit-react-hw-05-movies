import css from './SearchForm.module.css';
import PropTypes from 'prop-types';

const SearchForm = ({ onFormSabmit }) => {
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
      />

      <button type="submit" className={css.searchForm__btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onFormSabmit: PropTypes.func.isRequired,
};
