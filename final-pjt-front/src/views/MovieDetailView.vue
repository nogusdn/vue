<template>
  <div>
    <div class="movie-detail" v-if="movie.backdrop_path">
      <div class="movie-background" :style="{ backgroundImage: `url(${moviebackimgUrl})`}" style="background-size:cover">
        <div class="movie-content d-flex">
          <img class="p-4" :src="movieimgUrl" alt="">
          <div class="movie-text ms-3">
            <h1 class="d-flex justify-content-start pt-4">{{movie.title}}</h1>
            <p class="text-start ps-2">"{{movie.tagline}}"</p>
            <hr>
            <div class="d-flex justify-content-start ps-2">
            <span class="genres" v-for="genre in movie.genres" :key="genre.id">{{genre.name}}</span>
            </div>
            <div class="text-start ps-2" style="width:80%">
            <span>{{movie.release_date}} | {{movie.runtime}}분</span>           
            <p class="pt-4">{{movie.overview}}</p>
            <button>좋아요</button>
            <button>이미시청</button>
            </div>
          </div>      
        </div>
      </div>
      <hr>
      <h1>REVIEW</h1>
    </div>
  </div>

  
</template>

<script>

// 리뷰가져와서 타이틀만 뽑아서 나열해야함

import { mapActions, mapGetters } from 'vuex'

export default {
  name:'MovieDetailView',
  data(){
    return{
      moviePk: this.$route.params.moviePk,
      review:{
        title: '',
        content: '',
        rate: null,
      }
    }
  },
  computed:{
    ...mapGetters(['movie', 'movieimgUrl', 'moviebackimgUrl'])
  },
  methods:{
    ...mapActions(['fetchMovie']),

  },
  created(){
    this.fetchMovie(this.moviePk)
  }
}
</script>

<style>
.movie-detail{
  padding: 20px 20px;
  color: white;
}
.movie-content{
  height: 100hv;
  background-color: rgba( 40, 40, 40, 0.5 );
}
.genres:not(:first-of-type)::before{
  content: "/";
}
</style>