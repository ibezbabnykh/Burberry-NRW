import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import './ShowPage.scss';
import { loadShowDetails, loadEpisodeList } from '../../store/actions';
import { useShow } from '../../../../hooks';
import { Spinner, ErrorMessage } from '../../../common';
import ShowDetails from '../show-details';
import EpisodeList from '../episode-list';

const renderDetails = (error, loading, detailsData, episodeListData) => {
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage text={error} />;
  }

  return (
    <div className="show-page">
      <ShowDetails data={detailsData} />
      <EpisodeList data={episodeListData} />
    </div>
  );
};

const ShowPage = ({ loadShowDetails, loadEpisodeList }) => {
  const { id } = useParams();
  const { detailsData, episodeListData, error, loading } = useShow();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadShowDetails(id));
    dispatch(loadEpisodeList(id));
  }, [id, dispatch]);

  return (
    renderDetails(error, loading, detailsData, episodeListData)
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    loadShowDetails,
    loadEpisodeList
  }, dispatch);

export default connect(null, mapDispatchToProps)(ShowPage);