import axios from "axios";

// endpoints
const apiBaseUrl = "https://api.themoviedb.org/3";
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie`;

// endpoints with dynamic params

// movie
const movieDetailsEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}`;
const movieCreditsEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}/credits`;
const similarMoviesEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}/similar`;

// person
const personDetailsEndpoint = (id) =>
  `${apiBaseUrl}/person/${id}`;
const personMoviesEndpoint = (id) =>
  `${apiBaseUrl}/person/${id}/movie_credits`;

// functions to get images of different widths, (show images using these to improve the loading times)
export const image500 = (posterPath) =>
  posterPath ? "https://image.tmdb.org/t/p/w500" + posterPath : null;
export const image342 = (posterPath) =>
  posterPath ? "https://image.tmdb.org/t/p/w342" + posterPath : null;
export const image185 = (posterPath) =>
  posterPath ? "https://image.tmdb.org/t/p/w185" + posterPath : null;

// fallback images
export const fallbackMoviePoster =
  "https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg";
export const fallbackPersonImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU";

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGM0YmI0MmZhYjVjZGY2MDc3YmRjOGNiZWUyMWU2MSIsInN1YiI6IjY0M2EzOGFlOGQyMmZjMDQzY2RlYTAwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOayHyTVgmiaVeonaKd2EC8oKxGWrhe3rwj2ylruEKE",
    },

    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    return {};
  }
};

const apiPost = async (endpoint, body ,isFavourite) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGM0YmI0MmZhYjVjZGY2MDc3YmRjOGNiZWUyMWU2MSIsInN1YiI6IjY0M2EzOGFlOGQyMmZjMDQzY2RlYTAwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOayHyTVgmiaVeonaKd2EC8oKxGWrhe3rwj2ylruEKE",
    },
    body: JSON.stringify({
        "media_type": 'movie',
        "media_id": body,
        "favorite": isFavourite ? false : true,
      }),
  };
  fetch(endpoint, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
};

// home screen apis
export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};
export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};
export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};

// movie screen apis
export const fetchMovieDetails = (id) => {
  return apiCall(movieDetailsEndpoint(id));
};
export const fetchMovieCredits = (movieId) => {
  return apiCall(movieCreditsEndpoint(movieId));
};
export const fetchSimilarMovies = (movieId) => {
  return apiCall(similarMoviesEndpoint(movieId));
};

// person screen apis
export const fetchPersonDetails = (personId) => {
  return apiCall(personDetailsEndpoint(personId));
};
export const fetchPersonMovies = (personId) => {
  return apiCall(personMoviesEndpoint(personId));
};

// search screen apis
export const searchMovies = (params) => {
  return apiCall(searchMoviesEndpoint, params);
};

export const addFavoriteMovie= (body, isFavourite) => {
    const url = 'https://api.themoviedb.org/3/account/18940401/favorite';
    return apiPost(url,body,isFavourite)
}
export const getFavoriteListMovie= ()=> {
    const url = 'https://api.themoviedb.org/3/account/18940401/favorite/movies?language=en-US&page=1&sort_by=created_at.asc'
    return apiCall(url)
}