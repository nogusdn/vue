<template>
  <div>
    <router-link :to=" { name: 'movie', params: { moviePk: movie.id } }" class="card-text">
     <img :src="imgUrl" style="height: 300px; width: 200px;" alt="img">
    </router-link>
    <h5 class="card-title fw-bold">{{movie.title}}</h5>
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