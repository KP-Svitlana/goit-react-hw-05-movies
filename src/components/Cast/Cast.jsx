import { getSerchByCredits } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const IMB_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    getSerchByCredits(id).then(result => setCastInfo(result.data.cast));
  }, [id]);

  console.log(castInfo);

  return (
    <section className={css.cast}>
      <ul className={css.cast__list}>
        {castInfo
          ? castInfo.map(el => {
              return (
                <li className={css.cast__item}>
                  <img
                    src={IMB_BASE_URL + el.profile_path}
                    className={css.cast__img}
                    alt={el.name}
                  />
                  <p className={css.cast__text}>{el.name}</p>
                  <p className={css.cast__name}>Character: {el.character}</p>
                </li>
              );
            })
          : {}}
      </ul>
    </section>
  );
};

export default Cast;
