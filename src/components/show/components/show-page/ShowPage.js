import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useShow } from 'hooks';
import { loadShowDetails, loadEpisodeList } from '../../store/actions';
import { Spinner, ErrorMessage } from 'components/common';
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

const ShowPage = () => {
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

export default ShowPage;