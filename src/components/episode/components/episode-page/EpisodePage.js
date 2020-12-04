import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Spinner, ErrorMessage } from 'components/common';
import { loadEpisodeDetails } from '../../store/actions';
import EpisodeDetails from '../episode-details';

const EpisodePage = ({ data, error, loading }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEpisodeDetails(id));
  }, [id, dispatch]);

  if (loading || !data) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage text={error} />;
  }

  return (
    <div className="episode-page">
      <EpisodeDetails data={data} />
    </div>
  );
};

const mapStateToProps = ({ episode: { data, error, loading } }) => ({
  data, error, loading
})

export default connect(mapStateToProps)(EpisodePage);