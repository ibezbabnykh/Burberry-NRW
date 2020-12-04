import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

import './EpisodeList.scss';
import { EPISODE } from 'routes/routesConfig';

const renderEpisodeSeasonItem = (episode) => (
  <tr key={episode.id} className="episode-season-list__row">
    <td className="episode-season-list__row_number">{episode.number}</td>
    <td className="episode-season-list__row_date">{dateFormat(episode.airdate, 'mmmm d, yyyy')}</td>
    <td>
      <Link to={`${EPISODE}/${episode.id}`} className="episode-season-list__row_name">
        {episode.name}
      </Link>
    </td>
  </tr>
);

const renderEpisodeSeason = ({ season, values }) => (
  <section className="episode-season" key={season}>
    <header className="episode-season_title">Season {season}</header>
    <table className="episode-season-list">
      <thead className="episode-season-list__header">
        <tr className="episode-season-list__row">
          <th>Number</th>
          <th>Date</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody className="episode-season-list__body">{values.map(renderEpisodeSeasonItem)}</tbody>
    </table>
  </section>
);

const EpisodeList = ({ data }) => {
  return (
      <section className="episode-list">
        {data.map(renderEpisodeSeason)}
      </section>
  );
};

EpisodeList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      season: PropTypes.string.isRequired,
      values: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          season: PropTypes.number.isRequired,
          number: PropTypes.number.isRequired,
          id: PropTypes.number.isRequired,
          airdate: PropTypes.string.isRequired
        })
      ).isRequired
    })
  )
};

export default EpisodeList;