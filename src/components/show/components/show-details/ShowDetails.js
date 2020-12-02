import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './ShowDetails.scss';

const ShowDetails = ({ data }) => {
  const { name, image, summary } = data;

  return (
    <article className="show-details">
      <h1 className="show-details_title">{name}</h1>
      <div className="show-details_content">
        <div className="show-details_img">
          <a href={image.original} rel="noreferrer" target="_blank">
            <img src={image.medium} alt={name} title={name} />
          </a>
        </div>
        <div className="show-details_description">{ReactHtmlParser(summary)}</div>
      </div>
    </article>
  );
}

ShowDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.shape({
      original: PropTypes.string,
      medium: PropTypes.string,
    }).isRequired,
  }),
};

export default ShowDetails;