<template>
  <div>
    <!-- <h1>POPULAR MOVIE</h1>
      <div class='card-group d-flex justify-content-center'>        
        <movie-list-item v-for="movie in movies" :key="movie.id" :movie="movie"></movie-list-item>
      </div> -->
    <h1>NOW_PLAYING</h1>
    <vue-glide v-if="movies.length"
      class="glide__track"
      data-glide-el="track"
      ref="slider"
      type="carousel"
      :breakpoints="{ 3000: {perView: 5}, 1000: {perView: 3}, 600: {perView: 2} }">
      <vue-glide-slide v-for="movie in movies" :key="movie.id">
        <movie-list-item :movie="movie" />
      </vue-glide-slide>
      <template slot="control">
      <button data-glide-dir="<" class="glide__bullet">prev</button>
      <button data-glide-dir=">">next</button>
      </template>
    </vue-glide>
    <now-playing-movie v-for="movie in nowPlaying" :key="movie.id" :movie="movie"></now-playing-movie>

  </div>
</template>

<script>


import MovieListItem from '@/components/MovieListItem.vue'
import NowPlayingMovie from '@/components/NowPlayingMovie.vue'
import { Glide, GlideSlide } from 'vue-glide-js'


import { mapActions, mapGetters } from 'vuex'

export default {
  name:'MovieListView',
  components:{
    MovieListItem,
    NowPlayingMovie,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  computed:{
    ...mapGetters(['movies', 'nowPlaying'])
  },
  methods:{
    ...mapActions(['fetchMovies', 'fetchNowPlayingMovies']),
    test(){
      alert("test")
      console.log('test')
    }
  },
  created(){
    this.fetchMovies()
    this.fetchNowPlayingMovies()
  }
}
</script>

<style>
.horizontal-scrollable > .row {
          overflow-x: auto;
          white-space: nowrap;
      }
        
      .horizontal-scrollable > .row > .col-xs-4 {
          display: inline-block;
          float: none;
      }
      /* Decorations */
        
      .col-xs-4 {
          color: white;
          font-size: 24px;
          padding-bottom: 20px;
          padding-top: 18px;
      }
        
      .col-xs-4:nth-child(2n+1) {
          background: green;
      }
        
      .col-xs-4:nth-child(2n+2) {
          background: black;
      }
</style>