import { getSerchByReviews } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getSerchByReviews(id).then(result => setReviews(result.data.results));
  }, [id]);

  return (
    <section className={css.reviews}>
      <ul className={css.reviews_list}>
        {reviews.length > 0 &&
          reviews.map(el => {
            return (
              <li key={el.id}>
                <h3 className={css.reviews_title}>Author: {el.author}</h3>
                <p className={css.reviews_text}>{el.content}</p>
              </li>
            );
          })}
        {reviews.length === 0 && 'We don`t have any reviews for this movie.'}
      </ul>
    </section>
  );
};

export default Reviews;
