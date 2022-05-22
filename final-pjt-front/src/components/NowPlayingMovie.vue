<template>
  <div>
    <img :src="imgUrl" style="height: 400px; width: 295px;" alt="img">
    <h5 class="card-title fw-bold">{{movie.title}}</h5>
    <router-link :to=" { name: 'movie', params: { moviePk: movie.id } }" class="card-text">detail</router-link>
  </div>
</template>

<script>

export default {
  name:'NowPlayingMovie',
  props:{
    movie:Object
  },
  data: function(){
    return {
      imgUrl:`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`,
    }
  },
}
</script>

<style>

</style>