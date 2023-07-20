import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';


const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export const Statistics = ({  stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload Stats</h2>
      <ul className={css.statList}>
        {
            stats.map(({ id, label, percentage }) => {
                return (
                    <li
                      className={css.item}
                      key={id}
                      style={{
                        backgroundColor: getRandomColor(),
                      }}
                    >
                      <span className={css.label}>{label}</span>
                      <span className={css.percentage}>{percentage}%</span>
                    </li>
                  );
            })
        }
     
      </ul>
    </section>
  );
};


Statistics.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };