import { useQuery } from 'react-query';
import {
  upcomingAPI,
  topRateAPI,
  popularAPI,
  searchAPI,
  detailAPI,
} from '../api/movieAPI';

export const useUpcomingMovie = () => {
  return useQuery('upcomingMovie', upcomingAPI);
};

export const useTopRateMovie = () => {
  return useQuery('topRateMovie', topRateAPI);
};

export const usePopularMovie = () => {
  return useQuery('popularMovie', popularAPI);
};

export const useSearchMovie = (query) => {
  return useQuery(['searchMovie', query], () => searchAPI(query), {
    enabled: Boolean(query),
  });
};

export const useDetail = (id) => {
  return useQuery(['movieDetail', id], () => detailAPI(id));
};
