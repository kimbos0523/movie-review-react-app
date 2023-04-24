import Instance from './instance';

/**
 * APIs for searching on movies through external API
 */
export const detailAPI = (id) => Instance.get(`/movie/${id}`);

export const searchAPI = (query) =>
  Instance.get(`/search/movie?query=${query}`);

export const similarAPI = (id) => Instance.get(`/movie/${id}/similar`);

/**
 * APIs to getting movies information from external API
 */
export const upcomingAPI = () => Instance.get('/movie/upcoming');

export const topRateAPI = () => Instance.get('/movie/top_rated');

export const popularAPI = () => Instance.get('/movie/popular');
