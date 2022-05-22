// import drf from '@/api/drf'
// import router from '@/router'
import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3/movie/popular'
const API_KEY = 'e97617d64b251b650b844ce38f163eaa'
const params ={
  api_key: API_KEY,
  language : 'ko',
  region : 'KR',

}

export default {
  state:{
    movies: {},
    movie: {},
    nowPlaying: {},
  },
  getters:{
    movies: state => state.movies,
    movie: state => state.movie,
    nowPlaying: state => state.nowPlaying,
  },
  mutations:{
    SET_MOVIES(state, movies){
      state.movies = movies      
    },
    SET_MOVIE(state, movie){
      state.movie = movie
    },
    FETCH_NOW_PLAYING(state, movies){
      state.nowPlaying = movies
    }

  },
  actions:{
    fetchMovies({commit}){
      axios({
        method:'GET',
        url: API_URL,
        params
      })
      .then(res=>{
        const movies = res.data.results
        commit('SET_MOVIES', movies)
      })
      .catch(err=>{
        console.log(err.response)
      })
    },
    fetchNowPlayingMovies({commit}){
      axios({
        method:'get',
        url:`https://api.themoviedb.org/3/movie/now_playing`,
        params
      })
      .then(res=>{
        const nowPlaying = res.data.results
        commit('FETCH_NOW_PLAYING', nowPlaying)
      })
    }
    ,
    fetchMovie({commit}, moviePk){
      axios({
        method:'get',
        url: `https://api.themoviedb.org/3/movie/${moviePk}`,
        params: {
          api_key: API_KEY,
          movie_id: moviePk,
          language : 'ko',
          region : 'KR',    
        }
      })
      .then(res=>{
        const movie = res.data
        commit('SET_MOVIE', movie)
      })
    }
  },
}