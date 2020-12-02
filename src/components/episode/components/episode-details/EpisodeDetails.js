import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './EpisodeDetails.scss';
import { ImagePlaceholder } from '../../../common';

const EpisodeDetails = ({ data }) => {
  const { name, image, summary } = data;

  return (
    <article className="episode-details">
      <h1 className="episode-details_title">{name}</h1>
      <div className="episode-details_content">
        <div className="episode-details_img">
          {image ?
            <a href={image.original} rel="noreferrer" target="_blank">
              <img src={image.medium} alt={name} title={name} />
            </a>
            : <ImagePlaceholder />
          }
        </div>
        <div className="episode-details_description">{ReactHtmlParser(summary)}</div>
      </div>
    </article>
  );
};

EpisodeDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      original: PropTypes.string,
      medium: PropTypes.string
    })
  })
};

export default EpisodeDetails;