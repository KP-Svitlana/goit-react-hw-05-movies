import { getSerchByCredits } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const IMB_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getSerchByCredits(id).then(result => setCastInfo(result.data.cast));
  }, [id]);

  return (
    <section className={css.cast}>
      <ul className={css.cast__list}>
        {castInfo
          ? castInfo.map(el => {
              return (
                <li className={css.cast__item} key={el.credit_id}>
                  <img
                    src={
                      el.profile_path !== null
                        ? IMB_BASE_URL + el.profile_path
                        : 'https://ih1.redbubble.net/image.512138487.5983/fposter,small,wall_texture,product,750x1000.u3.jpg'
                    }
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
