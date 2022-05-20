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
    movies: {

    },
    movie: {

    },
  },
  getters:{
    movies: state => state.movies,
    movie: state => state.movie,
  },
  mutations:{
    SET_MOVIES(state, movies){
      state.movies = movies      
    },
    SET_MOVIE(state, movie){
      state.movie = movie
    }

  },
  actions:{
    fetchmovies({commit}){
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