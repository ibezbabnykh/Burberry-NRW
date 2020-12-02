import { useSelector } from 'react-redux';

const groupBy = (arr, keyValue) => {
  const res = arr.reduce((res, item) => {
    res[item[keyValue]] = [...res[item[keyValue]] || [], item];
    return res;
  }, {});

  return Object.entries(res).map(item => ({
    [keyValue]: item[0],
    values: item[1]
  }));
}

export const useShow = () => {
  const { detailsData, episodeListData, error, loading } = useSelector((state) => {
    const { data: detailsData, error: detailsError } = state.show.details;
    const { data: episodeListData, error: episodeListError } = state.show.episodeList;
    const groupedEpisodes = episodeListData && groupBy(episodeListData, 'season');

    return {
      detailsData,
      episodeListData: groupedEpisodes,
      error: detailsError || episodeListError,
      loading: !detailsData || !episodeListData
    };
  });

  return { detailsData, episodeListData, error, loading };
};