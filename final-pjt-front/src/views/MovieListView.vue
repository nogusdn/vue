<template>
  <div class="movie-list">
    <!-- <h1>POPULAR MOVIE</h1>
      <div class='card-group d-flex justify-content-center'>        
        <movie-list-item v-for="movie in movies" :key="movie.id" :movie="movie"></movie-list-item>
      </div> -->
    <h1>POPULAR MOVIE</h1>
    <vue-glide v-if="movies.length"
      class="glide__track"
      data-glide-el="track"
      ref="slider"
      type="carousel"
      :breakpoints="{ 3000: {perView: 7}, 1500: {perView: 5}, 1000: {perView: 3} }"
      :gap="10">
      <vue-glide-slide v-for="movie in movies" :key="movie.id">
        <movie-list-item :movie="movie" />
      </vue-glide-slide>
      <!-- <template slot="control">
      <button data-glide-dir="<" class="glide__bullet">prev</button>
      <button data-glide-dir=">">next</button>
      </template> -->
    </vue-glide>
    <h1>NOW PLAYING</h1>
    <vue-glide v-if="nowPlaying.length"
      class="glide__track"
      data-glide-el="track"
      ref="slider"
      type="carousel"
      :breakpoints="{ 3000: {perView: 7}, 1500: {perView: 5}, 1000: {perView: 3} }"
      :gap="10">
      <vue-glide-slide v-for="movie in nowPlaying" :key="movie.id">
        <now-playing-movie :movie="movie" />
      </vue-glide-slide>
      <!-- <template slot="control">
      <button data-glide-dir="<" class="glide__bullet">prev</button>
      <button data-glide-dir=">">next</button>
      </template> -->
    </vue-glide>

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
    ...mapGetters(['movies', 'nowPlaying',])
  },
  methods:{
    ...mapActions(['fetchMovies', 'fetchNowPlayingMovies',]),
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

</style>