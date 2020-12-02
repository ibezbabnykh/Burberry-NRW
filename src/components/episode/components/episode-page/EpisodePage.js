import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import './EpisodePage.scss';
import { loadEpisodeDetails } from '../../store/actions';
import { Spinner, ErrorMessage } from '../../../common';
import EpisodeDetails from '../episode-details';

const EpisodePage = ({ loadEpisodeDetails, data, error, loading }) => {
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    loadEpisodeDetails
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EpisodePage);